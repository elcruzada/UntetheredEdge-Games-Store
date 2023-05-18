from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, DateField, BooleanField, FloatField
from wtforms.validators import DataRequired, Email, ValidationError

class GameForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = TextAreaField('text', validators=[DataRequired()])
    release_date = DateField('date', validators=[DataRequired()])
    developer = StringField('developer', validators=[DataRequired()])
    publisher = StringField('publisher', validators=[DataRequired()])
    price = FloatField('price')
    genre = StringField('genre', validators=[DataRequired()])
