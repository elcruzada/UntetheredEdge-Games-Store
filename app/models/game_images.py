from .db import db, environment, SCHEMA, add_prefix_for_prod

class GameImage(db.Model):
    __tablename__ = "game_images"

    if environment == "production":
        __table_args__ = { 'schema': SCHEMA }

    id = db.Column(db.Integer, primary_key=True)
    game_id = db.Column(db.Integer)
    url = db.Column(db.String(255))
    preview = db.Column(db.Boolean)
