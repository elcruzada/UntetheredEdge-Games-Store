from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField
from wtforms.validators import DataRequired

class CommentForm(FlaskForm):
    comment = TextAreaField('comment', validators=[DataRequired()])
    game_id = IntegerField('game_id', validators=[DataRequired()])
