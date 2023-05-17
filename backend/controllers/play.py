from flask import jsonify
from models.play import Play
from database import db


def get_plays():
    plays = Play.query.all()
    return jsonify(plays)

def get_play_by_id(play_id):
    play = Play.query.filter_by(id=play_id).first()
    return jsonify(play)

def insert_play(play):
    play = Play(coordinateX=play['coordinateX'],coordinateY=play['coordinateY'], user=play['user'])
    db.session.add(play)
    db.session.commit()
    return jsonify(play)

def update_play(play_id, playUpdateData):
    play = Play.query.filter_by(id=play_id).first()
    if playUpdateData.get('coordinateX'):
        play.coordinateX = playUpdateData['coordinateX']
    if playUpdateData.get('coordinateY'):
        play.coordinateY = playUpdateData['coordinateY']
    if playUpdateData.get('user'):
        play.user = playUpdateData['user']

    db.session.commit()
    return jsonify(play)

def delete_play(play_id):
    play = Play.query.get_or_404(play_id)
    db.session.delete(play)
    db.session.commit()
    return jsonify(play)