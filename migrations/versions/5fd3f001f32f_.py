"""empty message

Revision ID: 5fd3f001f32f
Revises:
Create Date: 2023-05-21 10:25:40.165362

"""
from alembic import op
import sqlalchemy as sa


import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

# revision identifiers, used by Alembic.
revision = '5fd3f001f32f'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('profile_image', sa.String(length=255), nullable=True),
    sa.Column('account_capital', sa.Numeric(precision=10, scale=2), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('games',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('release_date', sa.Date(), nullable=True),
    sa.Column('creator_id', sa.Integer(), nullable=False),
    sa.Column('developer', sa.String(length=255), nullable=True),
    sa.Column('publisher', sa.String(length=255), nullable=True),
    sa.Column('price', sa.Float(), nullable=True),
    sa.Column('genre', sa.String(length=30), nullable=True),
    sa.Column('is_promoted', sa.Boolean(), nullable=True),
    sa.Column('is_on_sale', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['creator_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('orders',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('price_total', sa.Float(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('carts',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('game_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['game_id'], ['games.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'game_id')
    )
    op.create_table('game_images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('game_id', sa.Integer(), nullable=False),
    sa.Column('url', sa.String(length=255), nullable=True),
    sa.Column('preview', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['game_id'], ['games.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('orders_and_products',
    sa.Column('order_id', sa.Integer(), nullable=False),
    sa.Column('game_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['game_id'], ['games.id'], ),
    sa.ForeignKeyConstraint(['order_id'], ['orders.id'], ),
    sa.PrimaryKeyConstraint('order_id', 'game_id')
    )
    # ### end Alembic commands ###
    if environment == "production":
        op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE games SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE orders SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE carts SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE game_images SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE orders_and_products SET SCHEMA {SCHEMA};")

def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('orders_and_products')
    op.drop_table('game_images')
    op.drop_table('carts')
    op.drop_table('orders')
    op.drop_table('games')
    op.drop_table('users')
    # ### end Alembic commands ###
