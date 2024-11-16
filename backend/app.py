from flask import Flask, jsonify, request
from flask_cors import CORS  # Add CORS support
import process
import pandas as pd
import random

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')
def home():
    output = process.get_crop_feasibility()
    return output

@app.route("/api/update", methods=["POST"])
def update():
    data = request.json
    print(data)
    # Generate random scores for demonstration
    response_data = {
        "crops": [
            {
                "crop_name": crop["crop_name"],
                "technical_score": random.uniform(0.6, 0.9),
                "market_score": random.uniform(0.6, 0.9),
                "esg_score": random.uniform(0.6, 0.9),
                "regulatory_score": random.uniform(0.6, 0.9),
                "predicted_feasibility": random.uniform(0.7, 0.95)
            }
            for crop in data["crops"]
        ]
    }

    return jsonify(response_data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
