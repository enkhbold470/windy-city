from flask import Flask, jsonify, request
from flask_cors import CORS  # Add CORS support
import process
import pandas as pd
import random
import logging
import os
from werkzeug.exceptions import BadRequest

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s',
    handlers=[
        logging.StreamHandler()
    ]
)

VALID_CROPS = ["Cotton", "Soybean", "Rice", "Wheat", "Corn"]

@app.route('/health')
def health():
    """Health check endpoint for DigitalOcean"""
    return jsonify({"status": "healthy"}), 200

@app.route('/')
def home():
    try:
        output = process.get_crop_feasibility()
        return jsonify(output), 200
    except Exception as e:
        logging.error(f"Error fetching crop feasibility: {e}")
        return jsonify({"error": "Internal Server Error"}), 500

@app.route("/api/update", methods=["POST"])
def update():
    try:
        data = request.json

        # Generate random scores for demonstration
        response_data = {
            "crops": [
                {
                    "crop_name": crop,
                    "technical_score": random.uniform(0.6, 0.9),
                    "market_score": random.uniform(0.6, 0.9),
                    "esg_score": random.uniform(0.6, 0.9),
                    "regulatory_score": random.uniform(0.6, 0.9),
                    "predicted_feasibility": random.uniform(0.7, 0.95)
                }
                for crop in VALID_CROPS
            ]
        }

        return jsonify(response_data), 200
    except Exception as e:
        logging.error(f"Error processing request: {e}")
        return jsonify({"error": "Internal Server Error"}), 500

if __name__ == '__main__':
    port = int(os.getenv('PORT', 8080))
    app.run(host='0.0.0.0', port=port)
