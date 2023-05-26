from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User, Game, Order, cart, orders_and_product
from sqlalchemy import desc
from datetime import date
from ..forms.comment_form import CommentForm
from ..forms.login_form import LoginForm
from ..forms.order_form import OrderForm

orders_routes = Blueprint('orders', __name__, url_prefix='/api/orders')

# @orders_routes.route('/', methods=['GET', 'POST'])
# @login_required
# def make_current_user_order():
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

@orders_routes.route('/', methods=['GET'])
@login_required
def make_current_user_order():
    print('GGAAAAMES')
    current_cart_user = User.query.get(current_user.id)

    games_in_cart = current_cart_user.cart_user
    print('GAAAMES', games_in_cart)
    price_total = sum(game.price for game in games_in_cart)

    if current_cart_user.account_capital < price_total:
        return { 'error': 'Insufficient funds' }

    form = OrderForm()
    form.user_id.data = current_user.id
    form.price_total.data = price_total

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
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

    return new_order.to_dict()
