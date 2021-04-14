from flask import request
from flask_restful import Resource
from werkzeug.utils import secure_filename
from middleware import allowed_file
from aws import upload, delete_d
from models.drawing import Drawing
from models.db import db
import base64
from sqlalchemy.orm import joinedload


class Drawings(Resource):
    def get(self):
        drawings = Drawing.find_all()
        return [data.json() for data in drawings]

    def post(self):
        data = request.form.to_dict()
        file = request.files['image']
        print(file)
        filename = data['filename']
        if file and allowed_file(filename):
            file.filename = secure_filename(filename)
            uploaded = upload(file)
            drawing = Drawing(
                data['user_id'], data['gallery_id'], uploaded, data['coordinates'], file.filename)
            drawing.create()
            return drawing.json(), 201


class SingleDrawing(Resource):
    def get(self, drawing_id):
        drawing = Drawing.query.options(joinedload(
            'user')).filter_by(id=drawing_id).first()
        user = [u.json() for u in drawings.user]
        return {**drawing.json(), 'user': user}

    def put(self, drawing_id):
        data = request.get_json()
        drawing = Drawing.find_by_PK(drawing_id)
        for key in data:
            setattr(drawing, key, data[key])
        db.session.commit()
        return drawing.json()


class DeleteDrawing(Resource):
    def delete(self, filename, id):
        drawing_id = Drawing.find_by_PK(id)
        drawing = Drawing.find_by_filename(filename)
        print(filename)
        print(drawing_id)
        if not drawing_id:
            return {"msg": "Drawing NOT FOUND"}, 404
        delete_d(filename)
        db.session.delete(drawing_id)
        db.session.commit()
        return {"msg": "Drawing Deleted", "payload": id}
