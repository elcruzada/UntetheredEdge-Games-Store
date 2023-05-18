from .db import db, environment, SCHEMA, add_prefix_for_prod
from .join_tables import cart, orders_and_product

class Game(db.Model):
    __tablename__ = "games"

    if environment == "production":
        __table_args__ = { 'schema': SCHEMA }

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    release_date = db.Column(db.Date)
    creator_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False) #put foreign key to user
    developer = db.Column(db.String(255))
    publisher = db.Column(db.String(255))
    price = db.Column(db.Numeric(10,2))
    genre = db.Column(db.String(30))


    creator = db.relationship('User', back_populates="game_creator")

    game_images = db.relationship('GameImage', back_populates="game", cascade="all, delete-orphan")

    users_in_cart = db.relationship('User', secondary=cart, back_populates='cart_user')

    orders = db.relationship('Order', secondary=orders_and_product, back_populates='games')

    def to_dict(self):
        return {
            'id':self.id,
            'name': self.name,
            'description': self.description,
            'release_date': self.release_date,
            'creator_id': self.creator_id,
            'developer': self.developer,
            'publisher': self.publisher,
            'price': self.price,
            'genre': self.genre,
            'game_images' : [game_image.to_dict() for game_image in self.game_images]
        }
