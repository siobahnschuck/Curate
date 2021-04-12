from models.db import db
from datetime import datetime

class Gallery(db.Model):
    __tablename__ = 'galleries'
    id = db.Column(db.Integer, primary_key=True)
    exhibition_title = db.Column(db.String(255))
    description = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=str(
        datetime.utcnow()), nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow(
    ), nullable=False, onupdate=datetime.now())

    def __init__(self, exhibition_title, description):
        self.exhibition_title = exhibition_title
        self.description = description

    def json(self):
        return {"id": self.id, "exhibition_title": self.exhibition_title, "description": self.description, "created_at": str(self.created_at), "updated_at": str(self.updated_at)}

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def find_all(cls):
        return Gallery.query.all()

    @classmethod
    def find_by_PK(cls, gallery_id):
        gallery = Gallery.query.filter_by(id=gallery_id).first()
        return gallery

