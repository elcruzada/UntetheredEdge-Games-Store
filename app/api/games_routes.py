from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Game, GameImage, Comment, User
from sqlalchemy import desc
from datetime import date, datetime
from ..forms.game_form import GameForm
from ..forms.game_images_form import GameImagesForm
from ..forms.comment_form import CommentForm

games_routes = Blueprint('games', __name__, url_prefix='/api/games')

@games_routes.route('/')
def get_all_games():
    games = Game.query.order_by(desc(Game.release_date)).all()
    games_info = []

    for game in games:
        preview_image = None
        for game_image in game.game_images:
            if game_image.preview:
                preview_image = game_image
                break
            if not game_image.preview:
                preview_image = game_image
                break

        preview_image_url = preview_image.url if preview_image else None

        game_info = game.to_dict()
        game_info["preview"] = preview_image_url
        games_info.append(game_info)
    # print(games_data)
    return { "games": games_info }


@games_routes.route('/<int:id>', methods=['GET'])
def get_single_game(id):
    game = Game.query.get(id)
    if not game:
        return { "errors": "Game not found" }

    preview_image = None
    for image in game.game_images:
        if image.preview:
            preview_image = image
            break

    preview_image_url = preview_image.url if preview_image is not None else None

    game_info = game.to_dict()
    game_info["preview"] = preview_image_url

    return game_info

@games_routes.route('/new', methods=['POST'])
@login_required
def create_game():
    form = GameForm()
    # print(form)
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_game = Game (
            name=form.data['name'],
            description=form.data['description'],
            release_date=form.data['release_date'],
            creator_id=current_user.id,
            developer=form.data['developer'],
            publisher=form.data['publisher'],
            price=form.data['price'],
            genre=form.data['genre'],
            is_promoted=form.data['is_promoted'],
        )

        db.session.add(new_game)
        db.session.commit()
        return new_game.to_dict()
    return { "errors": form.errors}

@games_routes.route("/<int:id>", methods=["PUT"])
@login_required
def update_game(id):
    form = GameForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    game_to_edit = Game.query.get(id)

    if game_to_edit.creator_id != current_user.id:
        return { "errors": "You are not the owner of this game"}

    if game_to_edit:
        if form.validate_on_submit():
            game_to_edit.name=form.data['name']
            game_to_edit.description=form.data['description']
            game_to_edit.developer=form.data['developer']
            game_to_edit.publisher=form.data['publisher']
            game_to_edit.price=form.data['price']
            game_to_edit.genre=form.data['genre']
            game_to_edit.is_promoted=form.data['is_promoted']

            db.session.commit()
            return game_to_edit.to_dict()
    return { "errors": form.errors }

@games_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_game(id):
    game = Game.query.get(id)
    if game.creator_id != current_user.id:
        return { "error": "You are not authorized to delete this game" }

    db.session.delete(game)
    db.session.commit()
    return { "success": "Your game has been deleted from the store" }

@games_routes.route('/<int:id>/images', methods=['POST'])
@login_required
def add_images(id):
    game_to_add_image = Game.query.get(id)
    if not game_to_add_image:
        return { "errors": "Game not found" }

    urls = request.form.getlist('urls')
    if not urls:
        return { "errors": "No image URLs provided" }

    images = []
    for url in urls:
        new_game_image = GameImage (
            game_id=game_to_add_image.id,
            url=url,
            preview=False
        )
        db.session.add(new_game_image)
        images.append(new_game_image)

    db.session.commit()
    return { "images": [image.to_dict() for image in images] }

@games_routes.route('/<int:id>/images/<int:image_id>', methods=['DELETE'])
@login_required
def delete_image(id, image_id):
    game = Game.query.get(id)
    if not game:
        return { "errors": "Game does not exist" }

    image = GameImage.query.get(image_id)
    if not image or image.game_id != game.id:
        return { "errors": "Image does not exist or is not associated with the game" }

    db.session.delete(image)
    db.session.commit()

    return { "deletedImage": image.to_dict() }

@games_routes.route('/<int:id>/comments', methods=['POST'])
@login_required
def create_comment(id):
    form = CommentForm()

    game_to_comment = Game.query.get(id)

    if not game_to_comment:
        return {'error': 'Game could not be found'}

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_comment = Comment (
            game_id=form.data['game_id'],
            user_id=current_user.id,
            comment=form.data['comment'],
            created_at=datetime.utcnow()
        )

        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()

    return {'errors': form.errors}


@games_routes.route("/<int:id>/comments", methods=["PUT"])
@login_required
def update_comment(id):
    form = CommentForm()

    comment_to_edit = Comment.query.get(id)

    if not comment_to_edit:
        return { "errors": "Comment not found" }

    if comment_to_edit.user_id != current_user.id:
        return { "errors": "You are not the owner of this game"}

    form['csrf_token'].data = request.cookies['csrf_token']
    # if comment_to_edit:
    if form.validate_on_submit():
        comment_to_edit.game_id=form.data['game_id']
        comment_to_edit.comment=form.data['comment']

        db.session.commit()
        return comment_to_edit.to_dict()
    return { "errors": form.errors }
