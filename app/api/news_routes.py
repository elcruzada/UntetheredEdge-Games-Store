from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, NewsArticle, User
from ..forms.news_form import NewsForm
from sqlalchemy import desc
from datetime import date, datetime

news_routes = Blueprint('news', __name__, url_prefix='/api/news')

@news_routes.route('/')
def get_all_news():
    news = NewsArticle.query.order_by(desc(NewsArticle.created_at)).all()
    return { 'news': [n.to_dict() for n in news] }

@news_routes.route('/new', methods=['POST'])
@login_required
def create_news():
    form = NewsForm()
    # print(form)
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_article = NewsArticle (
            user_id=current_user.id,
            title=form.data['title'],
            preview_image=form.data['preview_image'],
            description=form.data['description'],
            content=form.data['content'],
            created_at=datetime.utcnow()
        )

        db.session.add(new_article)
        db.session.commit()
        return new_article.to_dict()
    return { "errors": form.errors}

@news_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_news(id):
    form = NewsForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    article_to_edit = NewsArticle.query.get(id)

    if article_to_edit.user_id != current_user.id:
        return { "errors": "You are not the author of this article" }

    if article_to_edit:
        if form.validate_on_submit():
            article_to_edit.title=form.title['title']
            article_to_edit.preview_image=form.data['preview_image']
            article_to_edit.description=form.data['preview_image']
            article_to_edit.content=form.data['content']

            db.session.commit()
            return article_to_edit.to_dict()
    return { "errors": form.errors }
