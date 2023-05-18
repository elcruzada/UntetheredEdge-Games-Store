from app.models import db, User, Game, GameImage, Order, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date

# Define the start and end dates for the range


# Adds a demo user, you can add other users here if you want
def seed_database():
    demo = User(
        username='Demo', email='demo@aa.io', password='password',
        profile_image='https://64.media.tumblr.com/2bac2857b1e074484f6ccc583bc35718/d77e58046f6fa9ba-20/s1280x1920/6120b7884a03a4ca88a47590def094cf61627931.jpg',
        account_capital=1133.77
        )
    gahyeon = User(
        username='gahyeon', email='gahyeon@aa.io', password='password',
        profile_image='https://64.media.tumblr.com/2bac2857b1e074484f6ccc583bc35718/d77e58046f6fa9ba-20/s1280x1920/6120b7884a03a4ca88a47590def094cf61627931.jpg',
        account_capital=1133.77
        )
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password',
        profile_image='https://64.media.tumblr.com/2bac2857b1e074484f6ccc583bc35718/d77e58046f6fa9ba-20/s1280x1920/6120b7884a03a4ca88a47590def094cf61627931.jpg',
        account_capital=1133.77
        )
    godmode = User(
        username='godmode', email='godmode@aa.io', password='password',
        profile_image='https://64.media.tumblr.com/2bac2857b1e074484f6ccc583bc35718/d77e58046f6fa9ba-20/s1280x1920/6120b7884a03a4ca88a47590def094cf61627931.jpg',
        account_capital=1133377.77
        )

    game1 = Game (
        name='The Glitcher 3: Wild Bugs',
        description='Fizzle in and out in this open world adventure',
        release_date=date(2015, 6, 22),
        creator_id=1,
        developer='CD Projekt Blue',
        publisher='UntetheredEdge Interactive',
        price=59.99,
        genre='RPG',
        is_promoted=False,
        is_on_sale=False
    )

    game2 = Game (
        name='Ogrewatch',
        description='This shooter will give you a shrekking good time.',
        release_date=date(2020, 3, 17),
        creator_id=2,
        developer='Gizzard',
        publisher='UntetheredEdge Interactive',
        price=29.99,
        genre='First-Person Shooter',
        is_promoted=False,
        is_on_sale=False
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



    # Add order instances to the session

    # Commit the changes to the database


    # Add OrderAndProduct instances to the session

    db.session.add(demo)
    db.session.add(gahyeon)
    db.session.add(bobbie)
    db.session.add(godmode)

    db.session.add(game1)
    db.session.add(game2)

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

# def undo_users():
#     if environment == "production":
#         db.session.execute(f"TRUNCATE table {SCHEMA}.games RESTART IDENTITY CASCADE;")
#     else:
#         db.session.execute(text("DELETE FROM users"))
#         db.session.execute(text("DELETE FROM games"))
#         db.session.execute(text("DELETE FROM game_images"))

#     db.session.commit()
