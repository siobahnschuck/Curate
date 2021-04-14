from flask_restful import Resource
from flask import request
from models.user import User
from middleware import create_token, gen_password, strip_token, read_token, compare_password
from sqlalchemy.orm import joinedload


class Login(Resource):
    def post(self):
        data = request.get_json()
        user = User.find_one(data['email'])
        if user and compare_password(data['password'], user.password_digest):
            payload = {
                "id": user.id,
                "email": user.email
            }
            token = create_token(payload)
            return {"token": token, "payload": payload}
        return {"msg": "UNAUTHORIZED USER"}, 401

    def get(self):
        token = strip_token(request)
        if token:
            payload = read_token(token)
            return payload
        return "UNAUTHORIZED", 401


class Register(Resource):
    def post(self):
        data = request.get_json()
        params = {
            "username": data['username'],
            "email": data['email'],
            "password_digest": gen_password(data['password']),
            "bio": data['bio'],
            "location": data['location']
        }
        user = User(**params)
        user.create()
        return user.json(), 201


class Profile(Resource):
    def get(self, user_id):
        user = User.query.options(
            joinedload('drawings')).filter_by(id=user_id).first()
        drawing = [d.json() for d in user.drawings]
        return {**user.json(), 'drawings': drawing}

    def delete(self, user_id):
        profile = User.find_by_PK(user_id)
        if not profile:
            return {"msg": "User not found"}, 404
        db.session.delete(profile)
        db.session.commit()
        return{"msg": "User Deleted", "payload": user_id}

    def put(self, user_id):
        data = request.get_json()
        profile = User.find_by_PK(user_id)
        for key in data:
            setattr(profile, key, data[key])
        db.session.commit()
        return profile.json()


class GalleryData(Resource):
    def get(self, user_id):
        user = User.query.options(
            joinedload('galleries')).filter_by(id=user_id).first()
        gallery = [g.json() for g in user.galleries]
        return {**user.json(), 'galleries': gallery}
