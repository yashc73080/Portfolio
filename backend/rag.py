from langchain_text_splitters import MarkdownHeaderTextSplitter
from langchain_pinecone import PineconeEmbeddings, PineconeVectorStore
from pinecone import Pinecone, ServerlessSpec

from langchain_openai import ChatOpenAI
from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain import hub

from dotenv import load_dotenv
import os
import time

# TODO modularize this script into functions

# Get environment variables from .env.local file

load_dotenv(dotenv_path="../.env.local")
PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

# Chunk the markdown content into sections based on the headers

with open('data.md', 'r') as file:
    markdown_document = file.read()

headers_to_split_on = [
    ("##", "Header 2")
]

markdown_splitter = MarkdownHeaderTextSplitter(
    headers_to_split_on=headers_to_split_on, strip_headers=False
)
md_header_splits = markdown_splitter.split_text(markdown_document)

print(md_header_splits)
print("\n")

# Initialize a LangChain embedding object

model_name = 'multilingual-e5-large'
embeddings = PineconeEmbeddings(
    model=model_name,
    pinecone_api_key=PINECONE_API_KEY
)

# Make a Pinecone index to store document

pc = Pinecone(api_key=PINECONE_API_KEY)

cloud = 'aws'
region = 'us-east-1'
spec = ServerlessSpec(cloud=cloud, region=region)

index_name = "portfolio"

if index_name not in pc.list_indexes().names():
    pc.create_index(
        name=index_name,
        dimension=embeddings.dimension,
        metric="cosine",
        spec=spec
    )
    # Wait for index to be ready
    while not pc.describe_index(index_name).status['ready']:
        time.sleep(1)

# See that it is empty
print("Index before upsert:")
print(pc.Index(index_name).describe_index_stats())
print("\n")

# Embed and upsert each record in a namespace

namespace = "data"

docsearch = PineconeVectorStore.from_documents(
    documents=md_header_splits,
    index_name=index_name,
    embedding=embeddings,
    namespace=namespace
)

time.sleep(5)

# See how many vectors have been upserted
print("Index after upsert:")
print(pc.Index(index_name).describe_index_stats())
print("\n")
time.sleep(2)

# Initialize LangChain object to chat with OpenAI LLM

retrieval_qa_chat_prompt = hub.pull("langchain-ai/retrieval-qa-chat")
retriever=docsearch.as_retriever()

# With OpenRouter
llm = ChatOpenAI(
    model_name="meta-llama/llama-3.2-3b-instruct:free",
    openai_api_key=OPENROUTER_API_KEY,
    openai_api_base="https://openrouter.ai/api/v1",
    temperature=0.0,
)

combine_docs_chain = create_stuff_documents_chain(
    llm, retrieval_qa_chat_prompt
)
retrieval_chain = create_retrieval_chain(retriever, combine_docs_chain)

# Test the chatbot

query1 = "Where did Yash work?"

answer1_with_knowledge = retrieval_chain.invoke({"input": query1})

print("Answer with knowledge:\n\n", answer1_with_knowledge['answer'])
print("\nContext used:\n\n", answer1_with_knowledge['context'])
print("\n")
time.sleep(2)
