from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
from Chatbot import Chatbot
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv(dotenv_path="../.env.local")

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000"]}})

# Initialize chatbot
chatbot = Chatbot(
    pinecone_api_key=os.getenv("PINECONE_API_KEY"),
    openrouter_api_key=os.getenv("OPENROUTER_API_KEY"),
    markdown_file="data.md",
    index_name="portfolio",
    namespace="data"
)

# Initialize chatbot components
md_header_splits = chatbot.load_markdown([("##", "Header 2")])
chatbot.initialize_embeddings('multilingual-e5-large')
chatbot.setup_pinecone_index(dimension=chatbot.embeddings.dimension)
chatbot.upsert_documents(md_header_splits)
chatbot.initialize_retrieval_chain(
    "meta-llama/llama-3.2-3b-instruct:free",
    "langchain-ai/retrieval-qa-chat"
)

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        user_input = request.json.get('message')
        if not user_input:
            return jsonify({"error": "Message is required"}), 400

        # Get response from chatbot
        response = chatbot.query_chatbot(user_input)
        
        return jsonify({
            "response": {
                "answer": response['answer'],
                # "context": response['context']
            }
        })
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": "An error occurred processing your request"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)