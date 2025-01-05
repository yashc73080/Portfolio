from langchain_text_splitters import MarkdownHeaderTextSplitter
from langchain_pinecone import PineconeEmbeddings, PineconeVectorStore
from pinecone import Pinecone, ServerlessSpec
from langchain_openai import ChatOpenAI
from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain import hub
from dotenv import load_dotenv
import os
import time

# Load environment variables
load_dotenv(dotenv_path="../.env.local")

class Chatbot:
    def __init__(self, pinecone_api_key, openrouter_api_key, markdown_file, index_name, namespace):
        self.pinecone_api_key = pinecone_api_key
        self.openrouter_api_key = openrouter_api_key
        self.markdown_file = markdown_file
        self.index_name = index_name
        self.namespace = namespace
        self.embeddings = None
        self.pc = None
        self.docsearch = None
        self.retrieval_chain = None

    def get_system_prompt(self):
        return '''
        You are an AI assistant that will answer questions about Yash Chennawar based on the information provided to you as context. 
        Don't ever explicitly refer to this context, but use it to answer questions to the best of your ability. 
        Use the metadata provided to you in the context to answer your questions. Consult the full context to answer questions.
        Just do not make information up. Only give information that was requested. 
        Only answer questions relevant to Yash Chennawar and/or the context provided. 
        '''

    def load_markdown(self, headers_to_split_on):
        """Load and split the markdown file into sections."""
        with open(self.markdown_file, 'r') as file:
            markdown_document = file.read()
        markdown_splitter = MarkdownHeaderTextSplitter(headers_to_split_on=headers_to_split_on) # strip_headers=False
        return markdown_splitter.split_text(markdown_document)

    def initialize_embeddings(self, model_name='multilingual-e5-large'):
        """Initialize Pinecone embeddings."""
        self.embeddings = PineconeEmbeddings(
            model=model_name,
            pinecone_api_key=self.pinecone_api_key
        )

    def setup_pinecone_index(self, dimension, cloud='aws', region='us-east-1'):
        """Set up a Pinecone index."""
        self.pc = Pinecone(api_key=self.pinecone_api_key)
        spec = ServerlessSpec(cloud=cloud, region=region)

        if self.index_name not in self.pc.list_indexes().names():
            self.pc.create_index(
                name=self.index_name,
                dimension=dimension,
                metric="cosine",
                spec=spec
            )
            # Wait for index to be ready
            while not self.pc.describe_index(self.index_name).status['ready']:
                time.sleep(1)

    def upsert_documents(self, documents):
        """Embed and upsert documents into the Pinecone index."""
        index = self.pc.Index(self.index_name)
        index.delete(delete_all=True, namespace=self.namespace)

        self.docsearch = PineconeVectorStore.from_documents(
            documents=documents,
            index_name=self.index_name,
            embedding=self.embeddings,
            namespace=self.namespace
        )
        # Allow time for indexing
        time.sleep(5)

    def initialize_retrieval_chain(self, llm_model_name, retrieval_qa_chat_prompt_path):
        """Initialize the retrieval chain using LangChain."""
        # Create LLM with base configuration
        llm = ChatOpenAI(
            model_name=llm_model_name,
            openai_api_key=self.openrouter_api_key,
            openai_api_base="https://openrouter.ai/api/v1",
            temperature=0.0,
        )

        # Get the base prompt from hub
        base_prompt = hub.pull(retrieval_qa_chat_prompt_path)
        
        # Create a new prompt template with system message
        prompt = ChatPromptTemplate.from_messages([
            ("system", self.get_system_prompt()),
            *base_prompt.messages,
            MessagesPlaceholder(variable_name="chat_history"),
        ])

        retriever = self.docsearch.as_retriever()
        
        # Create the chain with the new prompt
        combine_docs_chain = create_stuff_documents_chain(
            llm, 
            prompt
        )
        
        self.retrieval_chain = create_retrieval_chain(retriever, combine_docs_chain)

    def query_chatbot(self, query, chat_history=None):
        """Query the chatbot and return the response."""
        if not self.retrieval_chain:
            raise ValueError("Retrieval chain not initialized. Call `initialize_retrieval_chain` first.")
        
        # Include chat history if provided
        inputs = {
            "input": query,
            "chat_history": chat_history or []
        }
        
        return self.retrieval_chain.invoke(inputs)

    def get_index_stats(self):
        """Return Pinecone index statistics."""
        return self.pc.Index(self.index_name).describe_index_stats()

# Example Usage
if __name__ == "__main__":
    # Environment variables
    PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
    OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

    # Configuration
    MARKDOWN_FILE = "data.md"
    INDEX_NAME = "portfolio"
    NAMESPACE = "data"
    HEADERS_TO_SPLIT_ON = [("#", "Header 1"), ("##", "Header 2"),]
    MODEL_NAME = 'multilingual-e5-large'
    RETRIEVAL_QA_CHAT_PROMPT_PATH = "langchain-ai/retrieval-qa-chat"
    LLM_MODEL_NAME = "meta-llama/llama-3.2-3b-instruct:free"

    # Initialize chatbot
    chatbot = Chatbot(
        pinecone_api_key=PINECONE_API_KEY,
        openrouter_api_key=OPENROUTER_API_KEY,
        markdown_file=MARKDOWN_FILE,
        index_name=INDEX_NAME,
        namespace=NAMESPACE
    )

    # Load markdown and set up embeddings
    md_header_splits = chatbot.load_markdown(HEADERS_TO_SPLIT_ON)
    chatbot.initialize_embeddings(MODEL_NAME)

    # Setup Pinecone index and upsert documents
    chatbot.setup_pinecone_index(dimension=chatbot.embeddings.dimension)
    chatbot.upsert_documents(md_header_splits)

    # Initialize retrieval chain
    chatbot.initialize_retrieval_chain(LLM_MODEL_NAME, RETRIEVAL_QA_CHAT_PROMPT_PATH)

    # Query chatbot
    while True:
        user_query = input("Enter your query (type 'exit' to quit): ")
        if user_query.lower() == "exit":
            break
        response = chatbot.query_chatbot(user_query)
        print("Answer with knowledge:\n\n", response['answer'])
        print("\nContext used:\n\n", response['context'])
        print("\n")
