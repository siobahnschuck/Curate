from models.db import db
from datetime import datetime


class Drawing(db.Model):
    __tablename__ = 'drawings'
    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String())
    coordinates = db.Column(postgresql.JSONB())
    created_at = db.Column(db.DateTime, default=str(
        datetime.utcnow()), nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow(
    ), nullable=False, onupdate=datetime.now())

    def __init__(self, image, coordinates):
        self.image = image
        self.coordinates = coordinates

    def json(self):
        return{"id": self.id, "image": self.image, "coordinates": self.coordinates, "created_at": str(self.created_at), "updated_at": str(self.updated_at)}

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def find_by_PK(class, drawing_id):
        drawing = Drawing.query.filter_by(id=drawing_id).first()
        return drawing
