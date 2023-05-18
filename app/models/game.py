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
    # platforms = db.Column(db.String(255))

    creator = db.relationship('User', back_populates="game_creator")

    # users = db.relationship('User', back_populates='cart_user', secondary=cart, cascade='all, delete-orphan')
    user = db.relationship('User', back_populates="cart_user", secondary=cart)

    game_images = db.relationship('GameImage', back_populates="game", cascade="all, delete-orphan")

    cart_game = db.relationship(
        'User', back_populates='user', cascade='all, delete-orphan'
    )

    orders_and_products = db.relationship(
        'Order', secondary=orders_and_product, back_populates='games'
    )

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
            'genres': self.genres,
            'platform': self.platform
        }
