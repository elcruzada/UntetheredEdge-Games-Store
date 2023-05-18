from .db import db, environment, SCHEMA, add_prefix_for_prod

class GameImage(db.Model):
    __tablename__ = "game_images"

    if environment == "production":
        __table_args__ = { 'schema': SCHEMA }

    id = db.Column(db.Integer, primary_key=True)
    game_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('games.id')), nullable=False)
    url = db.Column(db.String(255))
    preview = db.Column(db.Boolean)

    game = db.relationship("Game", back_populates="game_images")

    def to_dict(self):
        return {
            'id': self.id,
            'game_id': self.game_id,
            'url': self.url,
            'preview': self.preview
        }
