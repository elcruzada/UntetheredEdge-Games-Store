from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Game, User
from sqlalchemy import desc

games_routes = Blueprint('games', __name__, url_prefix='/api/games')

@games_routes.route('/')
def get_all_games():
    games = Game.query.all()
    # print(games.game_images)
    return { "games": [game.to_dict() for game in games] }

@games_routes.route('/<int:gameId>')
def get_single_game(gameId):
    game = Game.query.get(gameId)
    