from flask import render_template
from project import server


@server.route('/')
@server.route('/index')
def index():
    return "hello world"
