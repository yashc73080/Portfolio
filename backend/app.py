from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
from Chatbot import Chatbot
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv(dotenv_path="../.env.local")

app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": [
            "http://localhost:3000",
            "https://portfolio-mu-three-91.vercel.app",
            "https://portfolio-git-main-yashs-projects-73080.vercel.app",
            "https://portfolio-pz2j1gjq9-yashs-projects-73080.vercel.app",
            "https://portfolio-yashs-projects-73080.vercel.app/"
        ],
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

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
        print("Received request:", request.json)  # Debug log
        user_input = request.json.get('message')
        if not user_input:
            print("No message provided")  # Debug log
            return jsonify({"error": "Message is required"}), 400

        response = chatbot.query_chatbot(user_input)
        print("Generated response:", response)  # Debug log
        return jsonify({
            "response": {
                "answer": response['answer'],
            }
        })
    except Exception as e:
        print(f"Error in chat endpoint: {str(e)}")  # Debug log
        return jsonify({"error": "An error occurred processing your request"}), 500
    
# Add CORS headers to all responses
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'https://portfolio-mu-three-91.vercel.app')
    response.headers.add('Access-Control-Allow-Origin', 'https://portfolio-git-main-yashs-projects-73080.vercel.app')
    response.headers.add('Access-Control-Allow-Origin', 'https://portfolio-pz2j1gjq9-yashs-projects-73080.vercel.app')
    response.headers.add('Access-Control-Allow-Origin', 'https://portfolio-yashs-projects-73080.vercel.app/')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    return response

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"}), 200

# if __name__ == '__main__':
#     app.run(debug=True, port=5000)

port = int(os.environ.get("PORT", 10000))
app.run(host='0.0.0.0', port=port)