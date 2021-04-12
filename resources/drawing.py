from flask import request
from flask_restful import Resource
from models.drawing import Drawing
from models.db import db


class Drawings(Resource):
    def get(self):
        drawings = Drawing.find_all()
        return [data.json() for data in drawings]

    def post(self):
        data = request.get_json()
        print(data)
        drawing = Drawing(**data)
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
