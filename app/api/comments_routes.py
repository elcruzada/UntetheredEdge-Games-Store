from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Comment, Game, User
from sqlalchemy import desc
from datetime import date
from ..forms.comment_form import CommentForm

comments_routes = Blueprint('comments', __name__, url_prefix='/api/comments')

@comments_routes.route('/current')
@login_required
def get_current_user_comments():
    current_comments = Comment.query.filter_by(user_id=current_user.id).order_by(Comment.created_at.desc()).all()
    user_comments = [comment.to_dict() for comment in current_comments]
    return { 'comments': user_comments }

