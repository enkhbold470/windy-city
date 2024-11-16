import random

VALID_CROPS = ["Cotton", "Soybean", "Rice", "Wheat", "Corn"]

def get_scores(crop_name):
    """Return scores based on crop validity"""
    if crop_name in VALID_CROPS:
        return {
            "technical": random.uniform(0.6, 0.9),
            "market": random.uniform(0.6, 0.9),
            "esg": random.uniform(0.6, 0.9),
            "regulatory": random.uniform(0.6, 0.9),
            "feasibility": random.uniform(0.7, 0.95)
        }
    else:
        return {
            "technical": 0,
            "market": 0,
            "esg": 0,
            "regulatory": 0,
            "feasibility": 0
        }

def get_crop_feasibility():
    """Generate feasibility data for valid crops"""
    crop_feasibility_data = {
        "crops": [
            {
                "crop_name": crop,
                **get_scores(crop)
            }
            for crop in VALID_CROPS
        ]
    }
    return crop_feasibility_data

def get_data():
    # This function is kept for compatibility but not used in this demo
    return pd.DataFrame()

def model_develop(df, new_data=None):
    # This function is kept for compatibility but not used in this demo
    return get_crop_feasibility()