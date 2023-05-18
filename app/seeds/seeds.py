
from app.models import db, User, Game, GameImage, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_database():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')
    godmode = User(
        username='melonhusk', email='godmode@aa.io', password='password'
    )

    game1 = Game (
        name='The Glitcher 3: Wild Bugs',
        description='Fizzle in and out in this open world adventure',
        release_date='2015-5-31',
        creator_id=1,
        developer='CD Projekt Blue',
        price=59.99,
        genre='RPG'
    )

    game2 = Game (
        name='Ogrewatch',
        description='This shooter will give you a shrekking good time.',
        release_date='2019-8-22',
        creator_id=2,
        developer='Gizzard',
        price=29.99,
        genre='First-person shooter'
    )

    game_image1preview = GameImage (
        game_id=1,
        url='https://i.ytimg.com/vi/J6Bgsqyyep0/sddefault.jpg',
        preview=True
    )

    game_image2preview = GameImage (
        game_id=2,
        url='https://i.chzbgr.com/full/8804529408/hBF54E19E/a-game-with-layers',
        preview=True
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(godmode)

    db.session.add(game_image1preview)
    db.session.add(game_image2preview)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_database():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.games RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.game_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        db.session.execute(text("DELETE FROM games"))
        db.session.execute(text("DELETE FROM game_images"))

    db.session.commit()
