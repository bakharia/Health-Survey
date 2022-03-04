import base64
import string
from urllib import response
from flask import Flask, redirect
import hashlib
import random
import requests
import datetime

app = Flask(__name__)

#helper functions
def save_datetime():
    dt = datetime

#Member API routes
@app.route("/members")
def members():
    return {"members": ["M_1", "M_2", "M_3"]}

@app.route("/fitbit_auth")
def fitbit_auth():
    r = random.randint(43,128)
    code_verifier = ''.join(random.choice(string.digits) for _ in range(r))
    sha = hashlib.sha256((code_verifier).encode())
    base64_url = sha.hexdigest()
    client_id = '2388WF'
    client_secret = 'e89a56bec30278e4579225ec4ca3344c'
    print(sha)
    return {'url':
        [f'https://www.fitbit.com/oauth2/authorize?client_id={client_id}&response_type=code&code_challenge={base64_url}&code_challenge_method=S256&scope=heartrate']
    }





if __name__ == "__main__":
    app.run(debug=True)