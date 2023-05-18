from .db import db, environment, SCHEMA, add_prefix_for_prod

cart = db.Table('carts',
    db.Model.metadata,
    db.Column('user_id', db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), primary_key=True),
    db.Column('game_id', db.Integer, db.ForeignKey(add_prefix_for_prod('games.id')), primary_key=True)
)

if environment == 'production':
    cart.schema = SCHEMA

orders_and_product = db.Table('orders_and_products',
    db.Model.metadata,
    db.Column('order_id', db.Integer, db.ForeignKey(add_prefix_for_prod('orders.id')), primary_key=True),
    db.Column('game_id', db.Integer, db.ForeignKey(add_prefix_for_prod('games.id')), primary_key=True)
)

if environment == 'production':
    orders_and_product.schema = SCHEMA
