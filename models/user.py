from models.db import db
from datetime import datetime


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    password_digest = db.Column(db.String(255), nullable=False)
    bio = db.Column(db.String(240))
    location = db.Column(db.String(80))
    created_at = db.Column(
        db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow(
    ), nullable=False, onupdate=datetime.utcnow)
    drawings = db.relationship(
        'Drawing', cascade='all', backref=db.backref('drawings', lazy=True))
    galleries = db.relationship(
        'Gallery', cascade='all', backref=db.backref('galleries', lazy=True))

    def __init__(self, username, email, password_digest, bio, location):
        self.username = username
        self.email = email
        self.password_digest = password_digest
        self.bio = bio
        self.location = location

    def json(self):
        return {"username": self.username, "email": self.email, "password_digest": self.password_digest, "bio": self.bio, "location": self.location, "created_at": str(self.created_at), "updated_at": str(self.updated_at)}

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self.json()

    @classmethod
    def find_one(cls, email):
        user = User.query.filter_by(email=email).first()
        return user

    @classmethod
    def find_by_PK(cls, user_id):
        user = User.query.filter_by(id=user_id).first()
        return user
