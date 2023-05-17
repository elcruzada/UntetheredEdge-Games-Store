from .db import db, environment, SCHEMA, add_prefix_for_prod
from .join_tables import orders_and_product

class Game(db.Model):
    __tablename__ = "games"

    if environment == "production":
        __table_args__ = { 'schema': SCHEMA }

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    release_date = db.Column(db.Date)
    creator_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')),
                           nullable=False) #put foreign key to user
    developer = db.Column(db.String(255))
    publisher = db.Column(db.String(255))
    price = db.Column(db.Numeric(10,2))
    genres = db.Column(db.String(30))
    platform = db.Column(db.String(255))

    user = db.relationship('User', back_populates='games')

    cart_game = db.relationship(
        'User', back_populates='game', cascade='all, delete-orphan'
    )

    orders_and_products = db.relationship(
        'Order', secondary=orders_and_product, back_populates='games'
    )
