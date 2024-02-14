from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/privacy-policy")
def privacy_policy():
    return render_template('privacy_policy.html')

@app.route("/refund-policy")
def refund_policy():
    return render_template('refund_policy.html')

@app.route("/terms-and-condition")
def terms_and_condition():
    return render_template('terms_and_conditions.html')

if __name__ == '__main__':
    app.run(debug=True)
