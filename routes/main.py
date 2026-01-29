from flask import Blueprint, render_template

main = Blueprint("main", __name__)

@main.route("/")
def index():
    return render_template("index.html")

@main.route("/request")
def request_page():
    return render_template("request.html")
