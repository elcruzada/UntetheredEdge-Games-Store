from flask_wtf import FlaskForm
from wtforms import StringField, FloatField
from wtforms.validators import DataRequired, ValidationError
from app.models import User

class OrderForm(FlaskForm):
    user_id = StringField('user_id', validators=[DataRequired()])
    price_total = FloatField('price_total', validators=[DataRequired()])

    def validate_user_id(self, field):
        user_id = field.data
        user = User.query.get(user_id)
        if not user:
            raise ValidationError('Invalid user ID.')

    def validate_price_total(self, field):
        price_total = field.data
        if price_total <= 0:
            raise ValidationError('Price total must be greater than zero.')
