from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User
from sqlalchemy import desc
from datetime import date
from ..forms.comment_form import CommentForm

cart_routes = Blueprint('carts', __name__, url_prefix='/api/cart')

@cart_routes.route('/')
def get_current_cart():
    pass
