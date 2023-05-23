from .db import db, environment, SCHEMA, add_prefix_for_prod
from .join_tables import orders_and_product

class Order (db.Model):
    __tablename__ = "orders"

    if environment == "production":
        __table_args__ = { 'schema': SCHEMA }

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    price_total = db.Column(db.Float)


    user = db.relationship('User', back_populates='orders')

    games = db.relationship(
        "Game", secondary=orders_and_product, back_populates='orders'
    )

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'price_total': self.price_total
        }
