import pandas as pd
import random

def get_crop_feasibility():
    """Generate random crop feasibility data"""
    crops = ["Cotton", "Soybean", "Rice", "Wheat", "Corn"]

    crop_feasibility_data = {
        "crops": [
            {
                "crop_name": crop,
                "technical_score": random.uniform(0.6, 0.9),
                "market_score": random.uniform(0.6, 0.9),
                "esg_score": random.uniform(0.6, 0.9),
                "regulatory_score": random.uniform(0.6, 0.9),
                "predicted_feasibility": random.uniform(0.7, 0.95)
            }
            for crop in crops
        ]
    }

    return crop_feasibility_data

def get_data():
    # This function is kept for compatibility but not used in this demo
    return pd.DataFrame()

def model_develop(df, new_data=None):
    # This function is kept for compatibility but not used in this demo
    return get_crop_feasibility()