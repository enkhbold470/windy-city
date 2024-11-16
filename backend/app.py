from flask import Flask, jsonify, request
from flask_cors import CORS
import process
import logging
import os
from werkzeug.exceptions import BadRequest

app = Flask(__name__)
CORS(app)

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
        if not data or "cropName" not in data:
            logging.warning("Bad request: Missing cropName")
            return jsonify({"error": "Missing cropName in request data"}), 400

        crop_name = data.get("cropName", "Unknown")
        if crop_name not in VALID_CROPS:
            logging.warning(f"Invalid crop name: {crop_name}")
            return jsonify({"error": "Invalid crop name"}), 400

        response_data = {
            "crops": [
                {
                    "crop_name": crop_name,
                    "technical_score": process.get_scores(crop_name)["technical"],
                    "market_score": process.get_scores(crop_name)["market"],
                    "esg_score": process.get_scores(crop_name)["esg"],
                    "regulatory_score": process.get_scores(crop_name)["regulatory"],
                    "predicted_feasibility": process.get_scores(crop_name)["feasibility"]
                }
            ]
        }
        return jsonify(response_data), 200
    except Exception as e:
        logging.error(f"Error processing request: {e}")
        return jsonify({"error": "Internal Server Error"}), 500

if __name__ == '__main__':
    port = int(os.getenv('PORT', 8080))
    app.run(host='0.0.0.0', port=port)
