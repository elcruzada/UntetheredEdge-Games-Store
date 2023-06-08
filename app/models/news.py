from .db import db, environment, SCHEMA, add_prefix_for_prod

class NewsArticle(db.Model):
    __tablename__ = 'news_articles'

    if environment == "production":
        __table_args__ = { 'schema': SCHEMA }

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    description = db.Column(db.Text)
    content = db.Column(db.Text)
    created_at = db.Column(db.Date)

    author = db.relationship('User', back_populates='article')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'description': self.description,
            'content': self.content,
            'created_at': self.created_at
        }
