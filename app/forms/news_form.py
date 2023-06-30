from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired

class NewsForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    preview_image = StringField('preview_image')
    description = TextAreaField('description', validators=[DataRequired()])
    content = TextAreaField('content', validators=[DataRequired()])
