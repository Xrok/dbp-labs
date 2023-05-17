from flask import jsonify
from models.player import Player
from database import db


def get_players():
    players = Player.query.all()
    return jsonify(players)

def get_player_by_id(player_id):
    player = Player.query.filter_by(id=player_id).first()
    return jsonify(player)

def insert_player(player):
    player = Player(firstname=player['firstname'], lastname=player['lastname'], password=player['password'])
    db.session.add(player)
    db.session.commit()
    return jsonify(player)

def update_player(player_id, playerUpdateData):
    player = Player.query.filter_by(id=player_id).first()
    if playerUpdateData.get('firstname'):
        player.firstname = playerUpdateData['firstname']
    if playerUpdateData.get('lastname'):
        player.lastname = playerUpdateData['lastname']
    if playerUpdateData.get('password'):
        player.password = playerUpdateData['password']

    db.session.commit()
    return jsonify(player)

def delete_player(player_id):
    player = Player.query.get_or_404(player_id)
    db.session.delete(player)
    db.session.commit()
    return jsonify(player)