from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Game, User
from ..forms.game_form import GameForm
from sqlalchemy import desc

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
    print('GAAME', game.to_dict())
    if not game:
        return { "errors": "Game not found"}
    return game.to_dict()

@games_routes.route('/new', methods=['POST'])
@login_required
def create_game():
    form = GameForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_game = Game(
            name=form.data['name'],
            description=form.data['description'],
            release_date=form.data['date'],
            developer=form.data['developer'],
            publisher=form.data['publisher'],
            price=form.data['price'],
            genre=form.data['genre'],
            is_promoted=form.data['is_promoted'],
            is_on_sale=form.data['is_promoted']
        )

        db.session.add(new_game)
        db.session.commit()
        return new_game.to_dict()
    return { "error": "Form you submitted is invalid"}
