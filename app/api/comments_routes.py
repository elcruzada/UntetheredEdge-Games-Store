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

# @comments_routes.route("/<int:id>/", methods=["PUT"])
# @login_required
# def update_comment(id):
#     form = CommentForm()

#     comment_to_edit = Comment.query.get(id)

#     if not comment_to_edit:
#         return { "errors": "Comment not found" }

#     if comment_to_edit.user_id != current_user.id:
#         return { "errors": "You are not the owner of this game"}

#     form['csrf_token'].data = request.cookies['csrf_token']
#     if comment_to_edit:
#         if form.validate_on_submit():
#             comment_to_edit.game_id=form.data['game_id']
#             comment_to_edit.comment=form.data['comment']

#             db.session.commit()
#             return comment_to_edit.to_dict()
#     return { "errors": form.errors }


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
