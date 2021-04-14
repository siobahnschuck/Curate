from models.db import db
from datetime import datetime
from sqlalchemy.dialects.postgresql.json import JSONB
import json
from sqlalchemy.dialects.postgresql import UUID


class Drawing(db.Model):
    __tablename__ = 'drawings'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    gallery_id = db.Column(db.Integer, db.ForeignKey(
        'galleries.id'), nullable=True)
    image = db.Column(db.String())
    coordinates = db.Column(JSONB)
    filename = db.Column(db.String(), unique=True)
    created_at = db.Column(db.DateTime, default=str(
        datetime.utcnow()), nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow(
    ), nullable=False, onupdate=datetime.now())
    user = db.relationship(
        'User', backref=db.backref('users_drawing', lazy=True))
    gallery = db.relationship(
        'Gallery', backref=db.backref('gallery_drawings', lazy=True))

    def __init__(self, user_id, gallery_id, image, coordinates, filename):
        self.user_id = user_id
        self.gallery_id = gallery_id
        self.image = image or None
        self.coordinates = coordinates
        self.filename = filename

    def json(self):
        return{"id": self.id, "user_id": self.user_id, "gallery_id": self.gallery_id, "image": self.image, "coordinates": json.loads(self.coordinates), "filename": self.filename, "created_at": str(self.created_at), "updated_at": str(self.updated_at)}

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def find_by_PK(cls, drawing_id):
        drawing = Drawing.query.filter_by(id=drawing_id).first()
        return drawing

    @classmethod
    def find_all(cls):
        drawing = Drawing.query.all()
        return drawing

    @classmethod
    def find_by_filename(cls, filename):
        drawing = Drawing.query.filter_by(filename=filename).first()
        return drawing
