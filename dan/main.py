
from openai import OpenAI
client = OpenAI()

completion = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {
            "role": "user",
            "content": "Write a haiku about recursion in programming."
        }
    ]
)

@app.route('/')
def index():
    return jsonify({"message": "Welcome to the File Parsing API. Use the /upload endpoint to upload files."})

print(completion.choices[0].message)