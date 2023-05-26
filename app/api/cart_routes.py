from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User, Game, Order, cart, orders_and_product
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


@cart_routes.route('/order', methods=['POST'])
@login_required
def order_cart_items():
    current_cart_user = User.query.get(current_user.id)
    cart_items = current_cart_user.cart_user

    if not cart_items:
        return {'error': 'Cart is empty'}

    total_price = sum(item.price for item in cart_items)

    new_order = Order(
        user=current_cart_user,
        price_total=total_price,
        games=cart_items
    )


    current_cart_user.account_capital -= total_price


    db.session.add(new_order)
    db.session.commit()

    current_cart_user.cart_user.clear()

    db.session.commit()

    return {'success': 'Order placed'}

@cart_routes.route('/orders', methods=['GET'])
@login_required
def get_game_order_info():
    join_condition = orders_and_product.c.game_id == Game.id

    query = db.session.query(Game, Order, Game.price).select_from(Game).join(
        orders_and_product, orders_and_product.c.order_id == Order.id
    ).filter(
        join_condition,
        Order.user_id == current_user.id
    )

    results = query.all()

    game_order_info = []


    for game, order, game_price in results:

        game_order_dict = {
            'game_id': game.id,
            'game_name': game.name,
            'game_price': game_price,
            'order_id': order.id,
            'order_price_total': order.price_total
        }

        
        game_order_info.append(game_order_dict)
    return {'game_orders': game_order_info}
    # join_condition = orders_and_product.c.game_id == Game.id

    # query = db.session.query(Game, Order).select_from(Game).join(
    #     orders_and_product, orders_and_product.c.order_id == Order.id
    # ).filter(join_condition)

    # results = query.all()

    # game_order_info = []

    # for game, order, price in results:
    #     game_order_dict = {
    #         'game_id': game.id,
    #         'game_name': game.name,
    #         'game_price': price,
    #         'order_id': order.id,
    #         'order_price_total': order.price_total
    #     }

    #     game_order_info.append(game_order_dict)

    # return {'game_orders': game_order_info}
# def get_current_user_orders():
#     user = User.query.get(current_user.id)

#     user_orders = Order.query.filter_by(user=user).all()

#     user_games = []
#     for order in user_orders:
#         games = order.games
#         games_to_dict = [game.to_dict() for game in games]
#         user_games.append(games_to_dict)

#     return { "user_orders": [order.to_dict() for order in user_orders],
#              "user_games": user_games
#             }
