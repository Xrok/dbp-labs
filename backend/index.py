from flask import Flask, request
from controllers.login import login
from flask_cors import CORS

from controllers.play import delete_play, get_play_by_id, get_plays, insert_play, update_play
from controllers.player import delete_player, get_player_by_id, get_players, insert_player, update_player

from database import db



app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

CORS(app)

# * Players

@app.route('/players', methods=['GET', 'POST'])
def route_get_players():
    if request.method == 'GET':
        return get_players()
    if request.method == 'POST':
        player = request.get_json()
        return insert_player(player)

@app.route('/players/<player_id>', methods=['GET', 'DELETE', 'PUT'])
def route_get_player(player_id):
    if request.method == 'GET':
        return get_player_by_id(player_id)
    if request.method == 'DELETE':
        return delete_player(player_id)
    if request.method == 'PUT':
        player = request.get_json()
        return update_player(player_id,player)
    
# * Plays

@app.route('/plays', methods=['GET', 'POST'])
def route_get_plays():
    if request.method == 'GET':
        return get_plays()
    if request.method == 'POST':
        play = request.get_json()
        return insert_play(play)

@app.route('/plays/<play_id>', methods=['GET', 'DELETE', 'PUT'])
def route_get_play(play_id):
    if request.method == 'GET':
        return get_play_by_id(play_id)
    if request.method == 'DELETE':
        return delete_play(play_id)
    if request.method == 'PUT':
        play = request.get_json()
        return update_play(play_id,play)
    
# * Login

@app.route('/login', methods=['POST'])
def route_login():
    login_credentials = request.get_json()
    return login(login_credentials)

def handler():
    with app.app_context():
        db.create_all()
    
    
handler()


