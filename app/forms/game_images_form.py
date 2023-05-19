from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField
from wtforms.validators import DataRequired

class GameImagesForm(FlaskForm):
    url = StringField('url', validators=[DataRequired()])
    preview = BooleanField('preview', validators=[DataRequired()])
