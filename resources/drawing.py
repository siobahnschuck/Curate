from flask import request
from flask_restful import Resource
from werkzeug.utils import secure_filename
from middleware import allowed_file
from aws import upload
from models.drawing import Drawing
from models.db import db
import base64

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
                data['user_id'], data['gallery_id'], uploaded, data['coordinates'])
            drawing.create()
            return drawing.json(), 201


class SingleDrawing(Resource):
    def put(self, drawing_id):
        data = request.get_json()
        drawing = Drawing.find_by_PK(drawing_id)
        for key in data:
            setattr(drawing, key, data[key])
        db.session.commit()
        return drawing.json()

    def delete(self, drawing_id):
        drawing = Drawing.find_by_PK(drawing_id)
        if not drawing:
            return {"msg": "Drawing NOT FOUND"}, 404
        db.session.delete(drawing)
        db.session.commit()
        return {"msg": "Drawing Deleted", "payload": drawing_id}
