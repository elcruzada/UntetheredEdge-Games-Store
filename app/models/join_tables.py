from .db import db, environment, SCHEMA, add_prefix_for_prod


cart = db.Table('carts',
    db.Model.metadata,
    db.Column('user_id', db.Integer, db.ForeignKey(add_prefix_for_prod('user.id')), primary_key=True),
    db.Column('game_id', db.Integer, db.ForeignKey(add_prefix_for_prod('game.id')), primary_key=True)
)

if environment == 'production':
    cart.schema = SCHEMA

order = db.Table('orders',
    db.Model.metadata,
    db.Column('id', db.Integer, primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey(add_prefix_for_prod('user.id'))),
    db.Column('price_total', db.Numeric(10, 2))
)

if environment == 'production':
    cart.schema = SCHEMA

orders_and_product = db.Table('orders_and_products',
    db.Model.metadata,
    db.Column('order_id', db.Integer, db.ForeignKey(add_prefix_for_prod('order.id')), primary_key=True),
    db.Column('game_id', db.Integer, db.ForeginKey(add_prefix_for_prod('game.id')), primary_key=True)
)

if environment == 'production':
    cart.schema = SCHEMA
