from app.models import db, User, Game, GameImage, Comment, Order, environment, SCHEMA
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
        is_promoted=True,
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
        genre='Multiplayer Shooter',
        is_promoted=True,
        is_on_sale=False
    )

    game3 = Game (
        name='Halo Kitty',
        description='When kitties have the ability to shape the planet',
        release_date=date(2010, 3, 17),
        creator_id=3,
        developer='YBox Game Studios',
        publisher='UntetheredEdge Interactive',
        price=49.99,
        genre='First-Person Shooter',
        is_promoted=True,
        is_on_sale=False
    )

    game4 = Game (
        name='Ruined friendships 3',
        description='You thought you had a party, but the party came to you',
        release_date=date(2005, 5, 13),
        creator_id=4,
        developer='Litendo',
        publisher='UntetheredEdge Interactive',
        price=109.99,
        genre='Party',
        is_promoted=True,
        is_on_sale=False
    )

    game5 = Game (
        name='Resident Smeagol',
        description='My preciouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuus',
        release_date=date(2009, 9, 12),
        creator_id=3,
        developer='Nocapcom',
        publisher='UntetheredEdge Interactive',
        price=11.11,
        genre='Horror',
        is_promoted=True,
        is_on_sale=False
    )

    game6 = Game (
        name='Retail 13 Manager',
        description="Just when you thought you couldn't simulate working under your old boss",
        release_date=date(2018, 12, 25),
        creator_id=3,
        developer='Circle enix',
        publisher='UntetheredEdge Interactive',
        price=299.99,
        genre='Life Simulator',
        is_promoted=True,
        is_on_sale=False
    )

    game_image1preview = GameImage (
        game_id=1,
        url='https://i.ytimg.com/vi/J6Bgsqyyep0/sddefault.jpg',
        preview=True
    )

    game_image2 = GameImage (
        game_id=1,
        url='https://www.trustedreviews.com/wp-content/uploads/sites/54/2015/05/The-Witcher-3-Wild-Hunt-They-call-this-civilization-I-feel-safer-in-the-woods-1.png',
        preview=False
    )

    game_image3 = GameImage (
        game_id=1,
        url='https://cdn.wccftech.com/wp-content/uploads/2023/01/The-Witcher-3-Benis-Lighting-Mod-scaled.jpg',
        preview=False
    )

    game_image4 = GameImage (
        game_id=1,
        url='https://uploads-ssl.webflow.com/5a33f05fcb37b70001e76674/63b349eff481e4aa896495ee_witchy2.jpg',
        preview=False
    )

    game_image5 = GameImage (
        game_id=1,
        url='https://images.pushsquare.com/57f26986881c7/the-witcher-3-wild-hunt-ps4-playstation-4-combat-guide.large.jpg',
        preview=False
    )

    game2_image_preview = GameImage (
        game_id=2,
        url='https://i.chzbgr.com/full/8804529408/hBF54E19E/a-game-with-layers',
        preview=True
    )

    game2_image_2 = GameImage (
        game_id=2,
        url='https://bloximages.newyork1.vip.townnews.com/dailyemerald.com/content/tncms/assets/v3/editorial/8/73/87346b56-0210-53c0-9c3d-ef62ec11ed2c/5ba530ba6db24.image.jpg?resize=889%2C500',
        preview=False
    )

    game2_image_3 = GameImage (
        game_id=2,
        url='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iuHoL7F21xko/v1/-1x-1.jpg',
        preview=False
    )

    game2_image_4 = GameImage (
        game_id=2,
        url='https://cdn.tempostorm.com/articles/multigenre0.large.jpg',
        preview=False
    )

    game2_image_5 = GameImage (
        game_id=2,
        url='https://i.ytimg.com/vi/o52PDBdWwdo/maxresdefault.jpg',
        preview=False
    )

    game3_image_preview = GameImage (
        game_id=3,
        url='https://external-preview.redd.it/JhKaZ9TrokOq8JEiSrEqHLmDJEImCLiNBeDS4lwkP3c.jpg?auto=webp&s=76bef8dde8afc7098312d2d2513be564ecd4be00',
        preview=True
    )

    game3_image_2 = GameImage (
        game_id=3,
        url='https://cdn.vox-cdn.com/thumbor/rLO1f9sCiD47DuboyPP6WUyzkRA=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/23120097/Screenshot__634_.png',
        preview=False
    )

    game3_image_3 = GameImage (
        game_id=3,
        url='https://64.media.tumblr.com/58f5cda3d5c6a96402e175b49d2a31d7/tumblr_p5tlvb91MP1tdtz92o1_1280.png',
        preview=False
    )

    game3_image_4 = GameImage (
        game_id=3,
        url='https://live.staticflickr.com/2922/14853210513_de48c0caaf_b.jpg',
        preview=False
    )

    game3_image_5 = GameImage (
        game_id=3,
        url='https://www.thetechgame.com/images/news/article/df5abc4c62.jpg',
        preview=False
    )

    game4_image_preview = GameImage (
        game_id=4,
        url='https://laughingsquid.com/wp-content/uploads/2014/06/10357642_1488398131374574_8483691325398290806_o.jpg',
        preview=True
    )

    game5_image_preview = GameImage (
        game_id=5,
        url='https://imgix.ranker.com/user_node_img/50058/1001143032/original/g-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375',
        preview=True
    )

    game6_image_preview = GameImage (
        game_id=6,
        url='https://m0.her.ie/wp-content/uploads/2013/12/20131212-16074213-4.jpg',
        preview=True
    )

    # Add order instances to the session

    # Commit the changes to the database
    comment1 = Comment (
        game_id=1,
        user_id=2,
        comment='OMG this game is just OMG wut OMG so good OMG',
        created_at=date(2023, 4, 13)
    )
    comment2 = Comment (
        game_id=2,
        user_id=1,
        comment='WHOA this has never happend to WHOA omg this has never',
        created_at=date(1991, 2, 16)
    )
    comment3 = Comment (
        game_id=3,
        user_id=2,
        comment='ARE you SERIOUS right now wut mate SERIOUS',
        created_at=date(2020, 6, 13)
    )
    comment4 = Comment (
        game_id=4,
        user_id=3,
        comment='I mean come on just insane come on just insane come on',
        created_at=date(2018, 12, 25)
    )
    comment5 = Comment (
        game_id=5,
        user_id=1,
        comment='Jeez, like wut goodness, jeez like WHOA WHOA WHOA',
        created_at=date(2022, 5, 15)
    )
    comment6 = Comment (
        game_id=1,
        user_id=4,
        comment='LIKE JUST LIKE JUST WUT LIKE WHOA WHOA LIKE',
        created_at=date(2021, 10, 23)
    )
    comment7 = Comment (
        game_id=1,
        user_id=3,
        comment='You have GOT TO BE just GOT TO BE just GOT',
        created_at=date(2023, 1, 29)
    )

    # Add OrderAndProduct instances to the session

    db.session.add(demo)
    db.session.add(gahyeon)
    db.session.add(bobbie)
    db.session.add(godmode)

    db.session.add(game1)
    db.session.add(game2)
    db.session.add(game3)
    db.session.add(game4)
    db.session.add(game5)
    db.session.add(game6)

    db.session.add(game_image1preview)
    db.session.add(game_image2)
    db.session.add(game_image3)
    db.session.add(game_image4)
    db.session.add(game_image5)

    db.session.add(game2_image_preview)
    db.session.add(game2_image_2)
    db.session.add(game2_image_3)
    db.session.add(game2_image_4)
    db.session.add(game2_image_5)

    db.session.add(game3_image_preview)
    db.session.add(game3_image_2)
    db.session.add(game3_image_3)
    db.session.add(game3_image_4)
    db.session.add(game3_image_5)

    db.session.add(game4_image_preview)
    db.session.add(game5_image_preview)
    db.session.add(game6_image_preview)

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)

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
