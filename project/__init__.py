from flask import Flask
from config import Config

# make the server as an instance
server = Flask(__name__)
# take configs
server.config.from_object(Config)

# need to import routes but avoid circular dependencies, so here it goes
# instead of header of file
from project import routes
