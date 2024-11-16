import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
import joblib  # For saving and loading the model

# Initialize model as None
model = None

def get_crop_feasibility():
    df = get_data()
    crop_feasibility_data = model_develop(df)  # Use the trained model for predictions
    return crop_feasibility_data

def get_data():
    # Create your data (this part can stay as is)
    data = {
        "Crop Name": ["Cotton", "Cacao", "Soybean", "Banana", "Rice", "Coffee"],
        "State of the Art (1-5)": [4, 5, 3, 3, 4, 4],
        "Plant Explant Farming (1-5)": [3, 4, 2, 1, 3, 4],
        "Complexity of Derived Product (1-5)": [4, 5, 3, 2, 3, 4],
        "Complexity of Biological Pathway (1-5)": [4, 5, 3, 2, 3, 4],
        "Culture Environment (1-5)": [3, 4, 3, 2, 3, 4],
        "Value ($/kg)": [2.5, 3.0, 1.2, 1.0, 0.8, 5.0],
        "Demand (Index)": [80, 95, 70, 85, 90, 75],
        "Markets Served (1-5)": [5, 5, 4, 3, 4, 5],
        "Supply Chain Resilience (1-5)": [4, 4, 3, 3, 4, 4],
        "Carbon Footprint (kg CO2/kg)": [2.2, 4.5, 1.8, 0.8, 2.5, 4.0],
        "Land Usage (L/kg)": [10000, 27000, 2400, 860, 1400, 21000],
        "Labor Conditions (1-5)": [4, 3, 2, 1, 2, 3],
        "Industry Sensitivity (1-5)": [3, 4, 5, 3, 2, 4],
        "Compliance Requirements (1-5)": [3, 5, 4, 2, 3, 4],
        "IP Status(1-5)": [4, 5, 3, 3, 4, 4],
        "Feasibility Score (Target)": [0.7, 0.8, 0.9, 1.0, 0.85, 0.75]
    }

    df = pd.DataFrame(data)
    return df

def model_develop(df, new_data=None):
    # Step 1: Data Preprocessing
    X = df.drop(columns=["Crop Name", "Feasibility Score (Target)"])
    y = df["Feasibility Score (Target)"]

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Step 2: Build and Train the Model (only once when the server starts)
    global model
    if model is None:
        pipeline = Pipeline([
            ('scaler', StandardScaler()),
            ('model', RandomForestRegressor(n_estimators=100, random_state=42))
        ])
        pipeline.fit(X_train, y_train)
        model = pipeline
        # Save the model to a file for future use
        joblib.dump(model, 'crop_feasibility_model.pkl')

    # Step 3: If new data is provided (for prediction)
    if new_data is not None:
        # Ensure 'Crop Name' is included in the new data for output
        crop_names = new_data["Crop Name"]
        # Drop the 'Crop Name' and other non-feature columns for prediction
        X_new = new_data.drop(columns=["Crop Name"])
        
        # Predict the feasibility for the new data
        predicted_feasibility = model.predict(X_new)
        
        # Prepare the crop feasibility data in the required format
        crop_feasibility_data = {
            "crops": [
                {"crop_name": crop_name, "predicted_feasibility": prediction}
                for crop_name, prediction in zip(crop_names, predicted_feasibility)
            ]
        }
        return crop_feasibility_data

    # Step 4: If no new data, predict for existing data and return results
    df["Predicted Feasibility"] = model.predict(X)
    crop_feasibility_data = {
        "crops": [
            {"crop_name": row["Crop Name"], "predicted_feasibility": row["Predicted Feasibility"]}
            for _, row in df.iterrows()
        ]
    }

    return crop_feasibility_data