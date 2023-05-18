from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Game, User
from sqlalchemy import desc
from datetime import datetime
from ..forms.game_form import GameForm

games_routes = Blueprint('games', __name__, url_prefix='/api/games')

@games_routes.route('/')
def get_all_games():
    games = Game.query.all()
    # print(games.game_images)
    print('GAAAMES', games)
    return { "games": [game.to_dict() for game in games] }

@games_routes.route('/<int:id>', methods=['GET'])
def get_single_game(id):
    game = Game.query.get(id)
    if not game:
        return { "errors": "Game not found"}
    return game.to_dict()

@games_routes.route('/new', methods=['POST'])
@login_required
def create_game():
    form = GameForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_game = Game (
            name=form.data['name'],
            description=form.data['description'],
            release_date=datetime.now(),
            creator_id=current_user.id,
            developer=form.data['developer'],
            publisher=form.data['publisher'],
            price=form.data['price'],
            genre=form.data['genre'],
            is_promoted=form.data['is_promoted'],
            is_on_sale=form.data['is_on_sale']
        )

        db.session.add(new_game)
        db.session.commit()
        return new_game.to_dict()
    return { "error": "Form you submitted is invalid"}

@games_routes.route("/new", methods=["PUT"])
@login_required
def update_game(id):
    form = GameForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    game_to_edit = Game.query.get(id)

    if game_to_edit.creator_id != current_user.id:
        return { "erorrs": "You are not the owner of this game"}

    if game_to_edit:
        if form.validate_on_submit():
            game_to_edit.name=form.data['name'],
            game_to_edit.description=form.data['description'],
            game_to_edit.developer=form.data['developer'],
            game_to_edit.publisher=form.data['publisher'],
            game_to_edit.price=form.data['price'],
            game_to_edit.genre=form.data['genre'],
            game_to_edit.is_promoted=form.data['is_promoted'],
            game_to_edit.is_on_sale=form.data['is_on_sale']

            db.session.commit()
            return game_to_edit.to_dict()
    return { "error": "Game not found" }

@games_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_game(id):
    game = Game.query.get(id)
    if game.creator_id != current_user:
        return { "error": "You are not authorized to delete this game" }

    db.session.delete(game)
    db.session.commit()
    return { "success": "Your game has been deleted" }
