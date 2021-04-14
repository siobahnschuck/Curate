from flask import request
from flask_restful import Resource
from models.gallery import Gallery
from models.db import db
from sqlalchemy.orm import joinedload


class Galleries(Resource):
    def get(self):
        galleries = Gallery.find_all()
        return [data.json() for data in galleries]

    def post(self):
        data = request.get_json()
        gallery = Gallery(**data)
        gallery.create()
        return gallery.json(), 201


class SingleGallery(Resource):
    def get(self, gallery_id):
        gallery = Gallery.query.options(
            joinedload('drawings')).filter_by(id=gallery_id).first()
        drawings = [d.json() for d in gallery.drawings]
        return {**gallery.json(), 'drawings': drawings}

    def put(self, gallery_id):
        data = request.get_json()
        gallery = Gallery.find_by_PK(gallery_id)
        for key in data:
            setattr(gallery, key, data[key])
        db.session.commit()
        return gallery.json()

    def delete(self, gallery_id):
        gallery = Gallery.find_by_PK(gallery_id)
        if not gallery:
            return {"msg": "Gallery Not Found"}, 404
        db.session.delete(gallery)
        db.session.commit()
        return {"msg": "Gallery Deleted", "payload": gallery_id}
