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

@comments_routes.route('/<int:id>', methods=['DELETE'])
def delete_comment(id):
    comment = Comment.query.get(id)

    if not comment:
        return {'error': 'Comment not found'}

    if comment.user_id != current_user.id:
        return {'error': 'You can only delete your own comments!'}

    db.session.delete(comment)
    db.session.commit()
    return { 'success': 'Your comment has been deleted' }
