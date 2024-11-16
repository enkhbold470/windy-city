from flask import Flask, jsonify, request
import process
import pandas as pd

app = Flask(__name__)

@app.route('/')
def home():
    output = process.get_crop_feasibility()
    return output

@app.route("/api/update", methods=["POST"])
def update():
    data = request.json
    # Convert the received data to a DataFrame
    new_data = pd.DataFrame(data)
    # Get predictions using the model
    predictions = process.model_develop(process.get_data(), new_data)  # Assuming `process.get_data()` returns the existing data
    return jsonify(predictions)  # Return predictions in the correct format

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
