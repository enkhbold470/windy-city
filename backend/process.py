from flask import Flask, jsonify
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_squared_error, r2_score

def get_crop_feasibility():
    df = step_1()
    crop_feasibility_data = step_2_3_4_5(df)
    # Return the JSON response
    return jsonify(crop_feasibility_data)
    

def step_1():
    # Step 1: Create Dummy Data with New Attributes
    data = {
        "Crop Name": ["Cotton", "Cacao", "Soybean", "Banana", "Rice", "Coffee"],
        
        # Technical Attributes
        "State of the Art (1-5)": [4, 5, 3, 3, 4, 4],
        "Plant Explant Farming (1-5)": [3, 4, 2, 1, 3, 4],
        "Complexity of Derived Product (1-5)": [4, 5, 3, 2, 3, 4],
        "Complexity of Biological Pathway (1-5)": [4, 5, 3, 2, 3, 4],
        "Culture Environment (1-5)": [3, 4, 3, 2, 3, 4],
        
        # Market Attributes
        "Value ($/kg)": [2.5, 3.0, 1.2, 1.0, 0.8, 5.0],
        "Demand (Index)": [80, 95, 70, 85, 90, 75],
        "Markets Served (1-5)": [5, 5, 4, 3, 4, 5],
        "Supply Chain Resilience (1-5)": [4, 4, 3, 3, 4, 4],
        
        # ESG Attributes
        "Carbon Footprint (kg CO2/kg)": [2.2, 4.5, 1.8, 0.8, 2.5, 4.0],
        "Land Usage (L/kg)": [10000, 27000, 2400, 860, 1400, 21000],
        "Labor Conditions (1-5)": [4, 3, 2, 1, 2, 3],
        "Industry Sensitivity (1-5)": [3, 4, 5, 3, 2, 4],
        
        # Regulatory Attributes
        "Compliance Requirements (1-5)": [3, 5, 4, 2, 3, 4],
        "IPStatus(1-5)": [4, 5, 3, 3, 4, 4],
        
        # Target Feasibility Score
        "Feasibility Score (Target)": [0.7, 0.8, 0.9, 1.0, 0.85, 0.75]
    }

    df = pd.DataFrame(data)
    return df


def step_2_3_4_5(df):
    # Step 2: Data Preprocessing
    X = df.drop(columns=["Crop Name", "Feasibility Score (Target)"])
    y = df["Feasibility Score (Target)"]

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Step 3: Build and Train the Model
    pipeline = Pipeline([
        ('scaler', StandardScaler()),
        ('model', RandomForestRegressor(n_estimators=100, random_state=42))
    ])

    pipeline.fit(X_train, y_train)

    # Step 4: Make Predictions
    df["Predicted Feasibility"] = pipeline.predict(X)

    # Step 5: Prepare Data for API Response
    crop_feasibility_data = {
        "crops": [
            {"crop_name": row["Crop Name"], "predicted_feasibility": row["Predicted Feasibility"]}
            for _, row in df.iterrows()
        ]
    }

    return crop_feasibility_data