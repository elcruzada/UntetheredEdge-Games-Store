from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Game, User
from ..forms import GameForm
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
    pass
