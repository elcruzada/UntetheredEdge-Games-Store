from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, DateField, BooleanField, FloatField
from wtforms.validators import DataRequired, Email, ValidationError

class GameForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
    release_date = DateField('release_date')
    developer = StringField('developer', validators=[DataRequired()])
    publisher = StringField('publisher', validators=[DataRequired()])
    price = FloatField('price')
    genre = StringField('genre', validators=[DataRequired()])
    is_promoted = BooleanField('is_promoted', default=False)
