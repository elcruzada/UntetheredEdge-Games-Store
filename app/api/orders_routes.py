from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User, Game, Order, cart, orders_and_product
from sqlalchemy import desc
from datetime import date
from ..forms.comment_form import CommentForm
from ..forms.login_form import LoginForm
from ..forms.order_form import OrderForm

orders_routes = Blueprint('order', __name__, url_prefix='/api/orders')

@orders_routes.route('/', methods=['GET'])
@login_required
def get_game_order_info():
    join_condition = orders_and_product.c.game_id == Game.id

    # Retrieve the game and order information from the association table
    query = db.session.query(Game, Order).select_from(Game).join(
        orders_and_product, orders_and_product.c.order_id == Order.id
    ).filter(join_condition)

    # Execute the query and fetch the results
    results = query.all()

    # Create a list to store the game and order information
    game_order_info = []

    # Access the game and order information from each row of the result
    for game, order in results:
        # Create a dictionary to hold the game and order attributes
        game_order_dict = {
            'game_id': game.id,
            'game_name': game.name,
            'order_id': order.id,
            'order_price_total': order.price_total
        }

        # Add the game and order information to the list
        game_order_info.append(game_order_dict)

    return {'game_orders': game_order_info}

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
#     # form = LoginForm()
#     current_cart_user = User.query.get(current_user.id)

#     games_in_cart = current_cart_user.cart_user

#     price_total = sum(game.price for game in games_in_cart)

#     if current_cart_user.account_capital < price_total:
#         return { 'error': 'Insufficient funds' }

#     # form['csrf_token'].data = request.cookies['csrf_token']
#     new_order = Order(
#         user=current_cart_user,
#         price_total=price_total,
#         games=games_in_cart
#     )

#     current_cart_user.account_capital -= price_total

#     db.session.add(new_order)
#     current_cart_user.cart_user.clear()
#     db.session.commit()

#     return { "success": "Transaction completed" }
# @orders_routes.route('/', methods=['POST'])
# # @login_required
# def make_current_user_order():
#     current_cart_user = User.query.get(current_user.id)

#     games_in_cart = current_cart_user.cart_user

#     price_total = sum(game.price for game in games_in_cart)

#     if current_cart_user.account_capital < price_total:
#         return jsonify({'error': 'Insufficient funds'})

#     form = OrderForm()
#     form.user_id.data = current_user.id
#     form.price_total.data = price_total

#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate():
#         new_order = Order(
#             user=current_cart_user,
#             price_total=price_total,
#             games=games_in_cart
#         )

#         current_cart_user.account_capital -= price_total

#         db.session.add(new_order)
#         current_cart_user.cart_user.clear()
#         db.session.commit()

#         return jsonify({'success': 'Transaction completed'})
#     else:
#         return jsonify({'errors': form.errors}), 400

# @orders_routes.route('/', methods=['GET'])
# @login_required
# def make_current_user_order():
#     print('GGAAAAMES')
#     current_cart_user = User.query.get(current_user.id)

#     games_in_cart = current_cart_user.cart_user
#     print('GAAAMES', games_in_cart)
#     price_total = sum(game.price for game in games_in_cart)

#     if current_cart_user.account_capital < price_total:
#         return { 'error': 'Insufficient funds' }

#     form = OrderForm()
#     form.user_id.data = current_user.id
#     form.price_total.data = price_total

#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         new_order = Order(
#             user=current_cart_user,
#             price_total=price_total,
#             games=games_in_cart
#         )

#         current_cart_user.account_capital -= price_total

#         db.session.add(new_order)
#         current_cart_user.cart_user.clear()
#         db.session.commit()

#         return { "success": "Transaction completed" }

#     return new_order.to_dict()
