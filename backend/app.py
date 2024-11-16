from flask import Flask
import process
from flask import Flask, jsonify
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_squared_error, r2_score

app = Flask(__name__)

@app.route('/')
def home():
    output = process.get_crop_feasibility()
    return output

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
