from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User, Game, Order, cart, orders_and_product
from sqlalchemy import desc
from datetime import date
from ..forms.comment_form import CommentForm
from ..forms.login_form import LoginForm
from ..forms.order_form import OrderForm

orders_routes = Blueprint('order', __name__, url_prefix='/api/orders')

# @orders_routes.route('/', methods=['GET'])
# @login_required
# def get_game_order_info():
#     join_condition = orders_and_product.c.game_id == Game.id

#     query = db.session.query(Game, Order).select_from(Game).join(
#         orders_and_product, orders_and_product.c.order_id == Order.id
#     ).filter(join_condition)

#     results = query.all()

#     game_order_info = []

#     for game, order in results:

#         game_order_dict = {
#             'game_id': game.id,
#             'game_name': game.name,
#             'order_id': order.id,
#             'order_price_total': order.price_total
#         }


#         game_order_info.append(game_order_dict)

#     return {'game_orders': game_order_info}
