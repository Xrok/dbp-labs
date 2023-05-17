from dataclasses import dataclass
from database import db

@dataclass
class Player(db.Model):
    id: int
    firstname: str
    lastname: str
    password: str

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    firstname = db.Column(db.String(100), nullable=False, unique=True)
    lastname = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    

    def __repr__(self):
        return f'<Player {self.firstname}>'