from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .join_tables import cart

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_image = db.Column(db.String(255))
    account_capital = db.Column(db.Float, default=1000.00)

    comments = db.relationship('Comment', back_populates='user')
    orders = db.relationship('Order', back_populates='user')

    game_creator = db.relationship('Game', back_populates='creator', cascade='all, delete-orphan')

    cart_user = db.relationship(
        'Game', secondary=cart, back_populates='users_in_cart'
    )

    article = db.relationship('NewsArticle', back_populates='author')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profile_image': self.profile_image,
            'account_capital': self.account_capital,
            'orders': [order.to_dict() for order in self.orders]
        }
