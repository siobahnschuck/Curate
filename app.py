from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from models.db import db
from models.user import User
from models.drawing import Drawing
from models.gallery import Gallery
from resources.auth import Login, Register, Profile, GalleryData
from resources.drawing import Drawings, SingleDrawing, DeleteDrawing
from resources.gallery import Galleries, SingleGallery
from flask_cors import CORS


app = Flask(__name__)
api = Api(app)
cors = CORS(app)


app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://localhost:5432/curate_database"
app.config['SQLALCHEMY_ECHO'] = True

db.init_app(app)
migrate = Migrate(app, db)

api.add_resource(Login, '/auth/login')
api.add_resource(Register, '/auth/register')
api.add_resource(Profile, '/auth/profile/<int:user_id>')
api.add_resource(GalleryData, '/profile/<int:user_id>')
api.add_resource(Drawings, '/drawings')
api.add_resource(SingleDrawing, '/drawings/<int:drawing_id>')
api.add_resource(DeleteDrawing, '/drawings/delete/<string:filename>/<int:id>')
api.add_resource(Galleries, '/gallery')
api.add_resource(SingleGallery, '/gallery/<int:gallery_id>')


if __name__ == '__main__':
    app.run(debug=True)
