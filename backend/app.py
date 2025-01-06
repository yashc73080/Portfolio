from flask import Flask, request, jsonify
from flask_cors import CORS
from Chatbot import Chatbot
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv(dotenv_path="../.env.local")

app = Flask(__name__)

# List of allowed origins
ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "https://portfolio-mu-three-91.vercel.app",
    "https://portfolio-git-main-yashs-projects-73080.vercel.app",
    "https://portfolio-pz2j1gjq9-yashs-projects-73080.vercel.app",
    "https://portfolio-yashs-projects-73080.vercel.app"
]

# Configure CORS
CORS(app, resources={
    r"/*": {
        "origins": ALLOWED_ORIGINS,
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"],
        "supports_credentials": False
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
md_header_splits = chatbot.load_markdown([("#", "Header 1"), ("##", "Header 2"), ("###", "Header 3")])
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
        print("Received request:", request.json)
        user_input = request.json.get('message')
        if not user_input:
            print("No message provided")
            return jsonify({"error": "Message is required"}), 400

        response = chatbot.query_chatbot(user_input)
        print("Generated response:", response)
        return jsonify({
            "response": {
                "answer": response['answer'],
            }
        })
    except Exception as e:
        print(f"Error in chat endpoint: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"}), 200

if __name__ == '__main__':
    # For local development
    app.run(debug=True, port=5000)
else:
    # For production
    port = int(os.environ.get("PORT", 10000))
    app.run(host='0.0.0.0', port=port)