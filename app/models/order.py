from .db import db, environment, SCHEMA, add_prefix_for_prod

class Order (db.Model):
    __tablename__ = "orders"

    if environment == "production":
        __table_args__ = { 'schema': SCHEMA }

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    price_total = db.Column('price_total', db.Numeric(10, 2))

    order_and_products = db.relationship(
        "OrderAndProduct", back_populates="order", cascade="all, delete-orphan"
    )

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'price_total': self.price_total
        }
