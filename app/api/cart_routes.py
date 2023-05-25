from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User, Game, cart
from sqlalchemy import desc
from datetime import date
from ..forms.comment_form import CommentForm

cart_routes = Blueprint('cart', __name__, url_prefix='/api/cart')

@cart_routes.route('/user')
def get_current_cart():
    current_user_cart = db.session.query(cart).filter(cart.c.user_id == current_user.id).all()
    cart_game_ids = [i[1] for i in current_user_cart]
    user_games = [Game.query.get(i).to_dict() for i in cart_game_ids]
    # print(user_games)
    return { "user_cart": user_games }

@cart_routes.route("/<int:id>", methods=['POST'])
@login_required
def add_to_cart(id):
    current_cart_user = User.query.get(current_user.id)
    game_to_add = Game.query.get(id)

    if not current_cart_user:
        return { "errors": "Cart not found" }

    if not game_to_add:
        return { "errors": "Game not found" }

    current_cart_user.cart_user.append(game_to_add)

    db.session.add(current_cart_user)
    db.session.commit()
    return { "success": "Added to cart" }

@cart_routes.route("/<int:id>", methods=['DELETE'])
@login_required
def delete_game_from_cart(id):
    current_cart_user = User.query.get(current_user.id)
    game_to_delete = Game.query.get(id)

    current_cart_user.cart_user.remove(game_to_delete)

    db.session.commit()
    return { "success": "Game deleted from cart!" }
