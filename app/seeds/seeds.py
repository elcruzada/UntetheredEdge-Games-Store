from app.models import db, User, Game, GameImage, Comment, NewsArticle, Order, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date, datetime

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
        creator_id=2,
        developer='CD Projekt Blue',
        publisher='UntetheredEdge Interactive',
        price=59.99,
        genre='RPG',
        is_promoted=True,
        is_on_sale=False
    )

    game2 = Game (
        name='Elden Nosering',
        description='Best game of all time. All factual. No opinions here',
        release_date=date(2022, 1, 22),
        creator_id=3,
        developer='Nandai Spamco',
        publisher='UntetheredEdge Interactive',
        price=89.99,
        genre='RPG',
        is_promoted=True,
        is_on_sale=False
    )

    game3 = Game (
        name='CyberShrek 2077',
        description='A new shrekkening in a new era awaits you in a dystopian world',
        release_date=date(2077, 9, 19),
        creator_id=3,
        developer='CD Projekt Orange',
        publisher='UntetheredEdge Interactive',
        price=20.77,
        genre='Open World',
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
        name='Saints Rowers',
        description='You thought it was over but no it is never over mate',
        release_date=date(2023, 5, 13),
        creator_id=4,
        developer='Brony',
        publisher='UntetheredEdge Interactive',
        price=109.99,
        genre='Party',
        is_promoted=True,
        is_on_sale=False
    )

    game6 = Game (
        name='Poke Hunter',
        description='How do you think they ate meat in the Pokemon series?',
        release_date=date(2023, 7, 17),
        creator_id=4,
        developer='Litendo',
        publisher='UntetheredEdge Interactive',
        price=777.99,
        genre='First-Person Shooter',
        is_promoted=True,
        is_on_sale=False
    )

    game7 = Game (
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

    game8 = Game (
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

    game9 = Game (
        name='Resident Smeagol',
        description='My preciouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuus',
        release_date=date(2009, 9, 12),
        creator_id=2,
        developer='Nocapcom',
        publisher='UntetheredEdge Interactive',
        price=11.11,
        genre='Horror',
        is_promoted=True,
        is_on_sale=False
    )

    game10 = Game (
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

    game11 = Game (
        name='Chocobo Trainer',
        description="Why play a sprawling open world when you can race big birds?",
        release_date=date(2013, 12, 13),
        creator_id=4,
        developer='Circle enix',
        publisher='UntetheredEdge Interactive',
        price=99.99,
        genre='Racing',
        is_promoted=True,
        is_on_sale=False
    )

    game12 = Game (
        name='League of Sailor Guardians',
        description="Why play a toxic game when you can play another toxic game with a Sailor Moon theme",
        release_date=date(2019, 10, 8),
        creator_id=4,
        developer='Rito',
        publisher='UntetheredEdge Interactive',
        price=49.99,
        genre='MOBA',
        is_promoted=True,
        is_on_sale=False
    )

    game13 = Game (
        name='Shrekken',
        description="The manliest fighting game ever created, no doubt",
        release_date=date(2018, 9, 13),
        creator_id=2,
        developer='Rito',
        publisher='UntetheredEdge Interactive',
        price=49.99,
        genre='Fighter',
        is_promoted=True,
        is_on_sale=False
    )

    game14 = Game (
        name='NewJeans: The Game',
        description="Obviously better than Aespa",
        release_date=date(2022, 12, 13),
        creator_id=4,
        developer='CalvinKlein',
        publisher='UntetheredEdge Interactive',
        price=231.99,
        genre='Rhythm Game',
        is_promoted=True,
        is_on_sale=False
    )

    game15 = Game (
        name='Super Waluigi Bros: Ultimate',
        description="WA WA WA WA WA WA WA WA WA WA WA WA WA WA WA",
        release_date=date(2021, 4, 11),
        creator_id=3,
        developer='Litendo',
        publisher='UntetheredEdge Interactive',
        price=99.99,
        genre='Fighter',
        is_promoted=True,
        is_on_sale=False
    )

    game16 = Game (
        name='Nimbus Angst',
        description="A sprawling tale about a man's inner angst and a big sword",
        release_date=date(2023, 9, 13),
        creator_id=3,
        developer='Circle Enix',
        publisher='UntetheredEdge Interactive',
        price=79.99,
        genre='RPG',
        is_promoted=True,
        is_on_sale=False
    )

    game17 = Game (
        name='Loot Purgatory 4',
        description="There is no escape",
        release_date=date(2018, 9, 13),
        creator_id=4,
        developer='Gizzard',
        publisher='UntetheredEdge Interactive',
        price=19.99,
        genre='Action RPG',
        is_promoted=True,
        is_on_sale=False
    )

    game18 = Game (
        name='Pink Buffness',
        description="Stronger than Goku. Not a joke. Look it up",
        release_date=date(2023, 5, 22),
        creator_id=2,
        developer='Litendo',
        publisher='UntetheredEdge Interactive',
        price=339.99,
        genre='Fighter',
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
        url='https://www.dreadxp.com/wp-content/uploads/2022/03/Elden-Header.jpg',
        preview=True
    )

    game2_image_2 = GameImage (
        game_id=2,
        url='https://cdn.mos.cms.futurecdn.net/DgDC66z4vyvH629Ng3fNv.png',
        preview=False
    )

    game2_image_3 = GameImage (
        game_id=2,
        url='https://cdn.mos.cms.futurecdn.net/tnk229NQH3hSUPXLDBKNUA.jpg',
        preview=False
    )
    game2_image_4 = GameImage (
        game_id=2,
        url='https://staticg.sportskeeda.com/editor/2022/03/0fd61-16481282293603-1920.jpg',
        preview=False
    )

    game2_image_5 = GameImage (
        game_id=2,
        url='https://eldenring.wiki.fextralife.com/file/Elden-Ring/omen_2_enemies_elden_ring_wiki_600px.jpg',
        preview=False
    )

    game3_image_preview = GameImage (
        game_id=3,
        url='https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/06/Cyberpunk-Memes.jpg',
        preview=True
    )

    game3_image_2 = GameImage (
        game_id=3,
        url='https://pbs.twimg.com/media/EpQU6xmUcAIJRa-.jpg',
        preview=False
    )

    game3_image_3 = GameImage (
        game_id=3,
        url='https://cyberpunk.city/uploads/default/optimized/2X/f/fb05bede9eb88133ee15bea3224e4cf93566de95_2_690x454.png',
        preview=False
    )

    game3_image_4 = GameImage (
        game_id=3,
        url='https://cdn.mos.cms.futurecdn.net/Mg4NoAZwmjUDTYBpf5hULn.jpg',
        preview=False
    )

    game3_image_5 = GameImage (
        game_id=3,
        url='https://assets.xboxservices.com/assets/1e/2f/1e2fd29e-cede-4bec-b7a8-35f78d53bfad.jpg?n=Cyberpunk-2077_Sneaky-Slider-1084_Edgerunners-Update_1600x675_02.jpg',
        preview=False
    )

    game4_image_preview = GameImage (
        game_id=4,
        url='https://laughingsquid.com/wp-content/uploads/2014/06/10357642_1488398131374574_8483691325398290806_o.jpg',
        preview=True
    )

    game5_image_preview = GameImage (
        game_id=5,
        url='https://cdn.mos.cms.futurecdn.net/QkAeiVRy7kbZESKoVPg9vV.jpg',
        preview=True
    )

    game6_image_preview = GameImage (
        game_id=6,
        url='https://img.4gamers.com.tw/puku-clone-version/79c3bcfd5c42275da52e56220d2ce20df8b5ae61.jpg',
        preview=True
    )

    game7_image_preview = GameImage (
        game_id=7,
        url='https://external-preview.redd.it/JhKaZ9TrokOq8JEiSrEqHLmDJEImCLiNBeDS4lwkP3c.jpg?auto=webp&s=76bef8dde8afc7098312d2d2513be564ecd4be00',
        preview=True
    )

    game7_image_2 = GameImage (
        game_id=7,
        url='https://cdn.vox-cdn.com/thumbor/rLO1f9sCiD47DuboyPP6WUyzkRA=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/23120097/Screenshot__634_.png',
        preview=False
    )

    game7_image_3 = GameImage (
        game_id=7,
        url='https://64.media.tumblr.com/58f5cda3d5c6a96402e175b49d2a31d7/tumblr_p5tlvb91MP1tdtz92o1_1280.png',
        preview=False
    )

    game7_image_4 = GameImage (
        game_id=7,
        url='https://live.staticflickr.com/2922/14853210513_de48c0caaf_b.jpg',
        preview=False
    )

    game7_image_5 = GameImage (
        game_id=7,
        url='https://www.thetechgame.com/images/news/article/df5abc4c62.jpg',
        preview=False
    )

    game8_image_preview = GameImage (
        game_id=8,
        url='https://i.chzbgr.com/full/8804529408/hBF54E19E/a-game-with-layers',
        preview=True
    )

    game8_image_2 = GameImage (
        game_id=8,
        url='https://bloximages.newyork1.vip.townnews.com/dailyemerald.com/content/tncms/assets/v3/editorial/8/73/87346b56-0210-53c0-9c3d-ef62ec11ed2c/5ba530ba6db24.image.jpg?resize=889%2C500',
        preview=False
    )

    game8_image_3 = GameImage (
        game_id=8,
        url='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iuHoL7F21xko/v1/-1x-1.jpg',
        preview=False
    )

    game8_image_4 = GameImage (
        game_id=8,
        url='https://cdn.tempostorm.com/articles/multigenre0.large.jpg',
        preview=False
    )

    game8_image_5 = GameImage (
        game_id=8,
        url='https://i.ytimg.com/vi/o52PDBdWwdo/maxresdefault.jpg',
        preview=False
    )

    game9_image_preview = GameImage (
        game_id=9,
        url='https://imgix.ranker.com/user_node_img/50058/1001143032/original/g-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375',
        preview=True
    )

    game10_image_preview = GameImage (
        game_id=10,
        url='https://m0.her.ie/wp-content/uploads/2013/12/20131212-16074213-4.jpg',
        preview=True
    )

    game11_image_preview = GameImage (
        game_id=11,
        url='https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/04/Final_Fantasy_XV_Chocobo-1.jpg',
        preview=True
    )
    game12_image_preview = GameImage (
        game_id=12,
        url='https://cdn.oneesports.gg/cdn-data/2022/07/LeagueofLegends_StarGuardians2022Group_SplashArt_Wallpaper.jpg',
        preview=True
    )
    game13_image_preview = GameImage (
        game_id=13,
        url='https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/zp3qv3numkicphmwx4ta.jpg',
        preview=True
    )
    game14_image_preview = GameImage (
        game_id=14,
        url='https://cdn.tatlerasia.com/tatlerasia/i/2023/03/10122513-newjeans-kpop-danielle-hanni-hyein-minji-haerin-red-carpet-girl-group-y2k-fashion-outfits-style-photos-2023-gettyimages-1435304638-cropped_cover_1600x837.jpg',
        preview=True
    )
    game15_image_preview = GameImage (
        game_id=15,
        url='https://i.redd.it/45z9v4al5na51.png',
        preview=True
    )
    game16_image_preview = GameImage (
        game_id=16,
        url='https://nichegamer.com/wp-content/uploads/2021/12/final-fantasy-vii-intergrade-pc-port-12-21-21-1.jpg',
        preview=True
    )
    game17_image_preview = GameImage (
        game_id=17,
        url='https://static1.thegamerimages.com/wordpress/wp-content/uploads/2023/03/diablo-4-12.jpg',
        preview=True
    )
    game18_image_preview = GameImage (
        game_id=18,
        url='https://images.gamebanana.com/img/ss/mods/6282debe6b233.jpg',
        preview=True
    )

    comment1 = Comment (
        game_id=1,
        user_id=2,
        comment='OMG this game is just OMG wut OMG so good OMG',
        created_at=date(1991, 4, 13)
    )
    comment2 = Comment (
        game_id=2,
        user_id=1,
        comment='WHOA this has never happend to WHOA omg this has never',
        created_at=date(2018, 2, 16)
    )
    comment3 = Comment (
        game_id=3,
        user_id=2,
        comment='ARE you SERIOUS right now wut mate SERIOUS',
        created_at=date(2019, 6, 13)
    )
    comment4 = Comment (
        game_id=4,
        user_id=3,
        comment='I mean come on just insane come on just insane come on',
        created_at=date(2020, 12, 25)
    )
    comment5 = Comment (
        game_id=5,
        user_id=1,
        comment='Jeez, like wut goodness, jeez like WHOA WHOA WHOA',
        created_at=date(2021, 5, 15)
    )
    comment6 = Comment (
        game_id=1,
        user_id=4,
        comment='LIKE JUST LIKE JUST WUT LIKE WHOA WHOA LIKE',
        created_at=date(2022, 10, 23)
    )
    comment7 = Comment (
        game_id=1,
        user_id=3,
        comment='You have GOT TO BE just GOT TO BE just GOT',
        created_at=date(2023, 1, 29)
    )

    news_article1 = NewsArticle (
        user_id=2,
        title='Final Fantasy 16 will knock your socks off',
        preview_image='https://cdn.vox-cdn.com/thumbor/-7uaQ4eZbBC77FJZIviRRvVS-QE=/0x0:1920x1080/1400x788/filters:focal(960x540:961x541)/cdn.vox-cdn.com/uploads/chorus_asset/file/23647732/ffxviclive.png',
        description='Grab the preorder today to feel completely fulfilled and happy with your life...',
        content="In the spectacular world of gaming, there are certain franchises that have proven their mettle time and time again, crafting experiences that resonate deeply with their fanbases. One such titan of the industry is none other than Final Fantasy. With each entry, it expands its universe, adds depth to its characters, and refines gameplay mechanics, ensuring a mesmerizing adventure. As we brace ourselves for the newest entry into the franchise, Final Fantasy XVI, early glimpses suggest it's set to exceed expectations and, quite literally, knock your socks off. Final Fantasy XVI is developed and published by Square Enix, the creators that have never disappointed when it comes to delivering a vibrant mix of adventure, stunning graphics, engrossing storytelling, and strategic combat. This installment of the franchise promises to push the boundaries even further, building upon the legacy of its predecessors with groundbreaking features and innovative gameplay elements.",
        created_at=date(2021, 5, 15)
    )
    news_article2 = NewsArticle (
        user_id=3,
        title='Two gamers get bloody in a bar',
        preview_image='https://static.wikia.nocookie.net/8cf42a12-40e4-4d43-82db-a4c9244e5d8d',
        description='Things got hairy when a no-deather tapped a speed runner in the shoulder...',
        content="In a bizarre incident that is sure to become the stuff of gaming folklore, two gamers recently found themselves in an unfortunate confrontation at a local bar, leading to a brawl as wild as any virtual boss fight. As the dust settled, evidence of the scuffle, including broken bottles and spattered blood, painted a vivid picture of a heated disagreement turned violent. The unusual suspects? A celebrated speedrunner and a steadfast no-deather, both well-known in their respective gaming circles. The drama unfolded when the no-deather, known for completing video games without a single character death, gave a seemingly harmless tap on the shoulder of the speedrunner, who specializes in completing games as quickly as possible. In an atmosphere already buzzing with alcohol and high stakes rivalry, this light contact set off an unpredictable series of events. The speedrunner, reportedly startled, spun around to confront the no-deather. What started as a tense exchange of words soon escalated, turning a cozy gaming bar into a battleground. While the motives behind the confrontation remain unclear, the incident has sparked intense discussion within the gaming community, reminding us all that passions can run high when reality collides with the competitive world of gaming.",
        created_at=date(2022, 10, 23)
    )
    news_article3 = NewsArticle (
        user_id=4,
        title='Two gamers get bloody in a bar',
        preview_image='https://www.pcgamesn.com/wp-content/sites/pcgamesn/2023/02/hogwarts-legacy-mods-shrek-2-550x309.jpg',
        description='Things got hairy when a no-deather tapped a speed runner in the shoulder...',
        content='',
        created_at=date(2023, 1, 29)
    )

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
    db.session.add(game7)
    db.session.add(game8)
    db.session.add(game9)
    db.session.add(game10)
    db.session.add(game11)
    db.session.add(game12)
    db.session.add(game13)
    db.session.add(game14)
    db.session.add(game15)
    db.session.add(game16)
    db.session.add(game17)
    db.session.add(game18)

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

    db.session.add(game7_image_preview)
    db.session.add(game7_image_2)
    db.session.add(game7_image_3)
    db.session.add(game7_image_4)
    db.session.add(game7_image_5)

    db.session.add(game8_image_preview)
    db.session.add(game8_image_2)
    db.session.add(game8_image_3)
    db.session.add(game8_image_4)
    db.session.add(game8_image_5)

    db.session.add(game9_image_preview)
    db.session.add(game10_image_preview)
    db.session.add(game11_image_preview)
    db.session.add(game12_image_preview)
    db.session.add(game13_image_preview)
    db.session.add(game14_image_preview)
    db.session.add(game15_image_preview)
    db.session.add(game16_image_preview)
    db.session.add(game17_image_preview)
    db.session.add(game18_image_preview)

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)

    db.session.add(news_article1)
    db.session.add(news_article2)
    db.session.add(news_article3)

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
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.news_articles RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        db.session.execute(text("DELETE FROM games"))
        db.session.execute(text("DELETE FROM game_images"))
        db.session.execute(text("DELETE FROM comments"))
        db.session.execute(text("DELETE FROM news_articles"))

    db.session.commit()

# def undo_users():
#     if environment == "production":
#         db.session.execute(f"TRUNCATE table {SCHEMA}.games RESTART IDENTITY CASCADE;")
#     else:
#         db.session.execute(text("DELETE FROM users"))
#         db.session.execute(text("DELETE FROM games"))
#         db.session.execute(text("DELETE FROM game_images"))

#     db.session.commit()
