from flask import jsonify

from models.player import Player


def login(player_credentials):
    print(player_credentials)
    player = Player.query.filter_by(firstname=player_credentials['firstname']).first()
    print(player)
    if not player:
        return {},401
    
    if player_credentials['password'] != player.password:
        return {},401
    
    return jsonify(player)