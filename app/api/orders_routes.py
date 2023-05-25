from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User, Game, Order, cart, orders_and_product
from sqlalchemy import desc
from datetime import date
from ..forms.comment_form import CommentForm

orders_routes = Blueprint('carts', __name__, url_prefix='/api/orders')

@orders_routes.route('/', methods=['POST'])
@login_required
def make_current_user_order():
    current_cart_user = User.query.get(current_user.id)

    games_in_cart = current_cart_user.cart_user

    price_total = sum(game.price for game in games_in_cart)

    if current_cart_user.account_capital < price_total:
        return { 'error': 'Insufficient funds' }

    new_order = Order(
        user=current_cart_user,
        price_total=price_total,
        games=games_in_cart
    )

    current_cart_user.account_capital -= price_total

    db.session.add(new_order)
    current_cart_user.cart_user.clear()
    db.session.commit()

    return { "success": "Transaction completed" }
