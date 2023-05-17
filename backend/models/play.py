from dataclasses import dataclass
from database import db

@dataclass
class Play(db.Model):
    id: int
    coordinateX: str
    coordinateY: str
    user: str

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    coordinateX = db.Column(db.Integer, nullable=False)
    coordinateY = db.Column(db.Integer, nullable=False)
    user = db.Column(db.Integer, nullable=False)
    

    def __repr__(self):
        return f'<Player {self.firstname}>'