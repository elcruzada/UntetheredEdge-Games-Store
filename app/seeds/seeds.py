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
    bobbie = User (
        username='bobbie', email='bobbie@aa.io', password='password',
        profile_image='https://64.media.tumblr.com/2bac2857b1e074484f6ccc583bc35718/d77e58046f6fa9ba-20/s1280x1920/6120b7884a03a4ca88a47590def094cf61627931.jpg',
        account_capital=1133.77
        )
    godmode = User(
        username='godmode', email='godmode@aa.io', password='password',
        profile_image='https://64.media.tumblr.com/2bac2857b1e074484f6ccc583bc35718/d77e58046f6fa9ba-20/s1280x1920/6120b7884a03a4ca88a47590def094cf61627931.jpg',
        account_capital=1133377.77
        )
    marnz = User (
        username='marnz', email='marnz@aa.io', password='password',
        profile_image='https://64.media.tumblr.com/2bac2857b1e074484f6ccc583bc35718/d77e58046f6fa9ba-20/s1280x1920/6120b7884a03a4ca88a47590def094cf61627931.jpg',
        account_capital=1133.77
        )

    game1 = Game (
        name='The Glitcher',
        description='Fizzle in and out in this open world adventure',
        release_date=date(2015, 6, 22),
        creator_id=2,
        developer='Projekt Blue',
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
        url='https://picsum.photos/id/345/1000/1000',
        preview=True
    )

    game_image2 = GameImage (
        game_id=1,
        url='https://picsum.photos/id/321/1000/1000',
        preview=False
    )

    game_image3 = GameImage (
        game_id=1,
        url='https://picsum.photos/id/331/1000/1000',
        preview=False
    )

    game_image4 = GameImage (
        game_id=1,
        url='https://picsum.photos/id/339/1000/1000',
        preview=False
    )

    game_image5 = GameImage (
        game_id=1,
        url='https://picsum.photos/id/349/1000/1000',
        preview=False
    )

    game2_image_preview = GameImage (
        game_id=2,
        url='https://picsum.photos/id/340/1000/1000',
        preview=True
    )

    game2_image_2 = GameImage (
        game_id=2,
        url='https://picsum.photos/id/343/1000/1000',
        preview=False
    )

    game2_image_3 = GameImage (
        game_id=2,
        url='https://picsum.photos/id/317/1000/1000',
        preview=False
    )
    game2_image_4 = GameImage (
        game_id=2,
        url='https://picsum.photos/id/271/1000/1000',
        preview=False
    )

    game2_image_5 = GameImage (
        game_id=2,
        url='https://picsum.photos/id/343/1000/1000',
        preview=False
    )

    game3_image_preview = GameImage (
        game_id=3,
        url='https://picsum.photos/id/22/1000/1000',
        preview=True
    )

    game3_image_2 = GameImage (
        game_id=3,
        url='https://picsum.photos/id/97/1000/1000',
        preview=False
    )

    game3_image_3 = GameImage (
        game_id=3,
        url='https://picsum.photos/id/129/1000/1000',
        preview=False
    )

    game3_image_4 = GameImage (
        game_id=3,
        url='https://picsum.photos/id/129/1000/1000',
        preview=False
    )

    game3_image_5 = GameImage (
        game_id=3,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=False
    )

    game4_image_preview = GameImage (
        game_id=4,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=True
    )

    game5_image_preview = GameImage (
        game_id=5,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=True
    )

    game6_image_preview = GameImage (
        game_id=6,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=True
    )

    game7_image_preview = GameImage (
        game_id=7,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=True
    )

    game7_image_2 = GameImage (
        game_id=7,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=False
    )

    game7_image_3 = GameImage (
        game_id=7,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=False
    )

    game7_image_4 = GameImage (
        game_id=7,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=False
    )

    game7_image_5 = GameImage (
        game_id=7,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=False
    )

    game8_image_preview = GameImage (
        game_id=8,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=True
    )

    game8_image_2 = GameImage (
        game_id=8,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=False
    )

    game8_image_3 = GameImage (
        game_id=8,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=False
    )

    game8_image_4 = GameImage (
        game_id=8,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=False
    )

    game8_image_5 = GameImage (
        game_id=8,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=False
    )

    game9_image_preview = GameImage (
        game_id=9,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=True
    )

    game10_image_preview = GameImage (
        game_id=10,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=True
    )

    game11_image_preview = GameImage (
        game_id=11,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=True
    )
    game12_image_preview = GameImage (
        game_id=12,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=True
    )
    game13_image_preview = GameImage (
        game_id=13,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=True
    )
    game14_image_preview = GameImage (
        game_id=14,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=True
    )
    game15_image_preview = GameImage (
        game_id=15,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=True
    )
    game16_image_preview = GameImage (
        game_id=16,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=True
    )
    game17_image_preview = GameImage (
        game_id=17,
        url='https://picsum.photos/seed/picsum/1000/1000',
        preview=True
    )
    game18_image_preview = GameImage (
        game_id=18,
        url='https://picsum.photos/seed/picsum/1000/1000',
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
        description='Things got hairy when a no-deather tapped a speed runner on the shoulder...',
        content="In a bizarre incident that is sure to become the stuff of gaming folklore, two gamers recently found themselves in an unfortunate confrontation at a local bar, leading to a brawl as wild as any virtual boss fight. As the dust settled, evidence of the scuffle, including broken bottles and spattered blood, painted a vivid picture of a heated disagreement turned violent. The unusual suspects? A celebrated speedrunner and a steadfast no-deather, both well-known in their respective gaming circles. The drama unfolded when the no-deather, known for completing video games without a single character death, gave a seemingly harmless tap on the shoulder of the speedrunner, who specializes in completing games as quickly as possible. In an atmosphere already buzzing with alcohol and high stakes rivalry, this light contact set off an unpredictable series of events. The speedrunner, reportedly startled, spun around to confront the no-deather. What started as a tense exchange of words soon escalated, turning a cozy gaming bar into a battleground. While the motives behind the confrontation remain unclear, the incident has sparked intense discussion within the gaming community, reminding us all that passions can run high when reality collides with the competitive world of gaming.",
        created_at=date(2022, 10, 23)
    )
    news_article3 = NewsArticle (
        user_id=4,
        title='Voldemort has been added in the new Hogwarts DLC!',
        preview_image='https://image-cdn.essentiallysports.com/wp-content/uploads/Hogwarts-Legacy-Voldemort-Sorting-hat-1110x903.jpg',
        description="Hey all you Riddle fans. Voldemort is now a playable character in this new DLC",
        content="In an unprecedented move that's set the wizarding world abuzz, He Who Must Not Be Named has been announced as a playable character in the latest Hogwarts game DLC. That's right, Lord Voldemort, the feared nemesis of Harry Potter, will be joining the magical roster, inviting players to experience the world of Hogwarts through the eyes of the Dark Lord himself. This bold addition represents an exciting twist for fans of the franchise, promising a unique exploration of the Hogwarts universe that contrasts with the traditionally heroic narratives. If you've ever wondered what it's like to don the cloak of the Dark Arts, this update is for you. Riddle fans will now have the opportunity to delve into the shadowy depths of Voldemort's journey, casting spells, devising cunning strategies, and even engaging in epic duels. Voldemort's notorious ruthlessness and power will bring an unprecedented level of challenge and depth to the game's mechanics. With the addition of this iconic character, Hogwarts game has taken a daring step into unexplored territories of storytelling and character development. Prepare to tread the line between darkness and power, as you navigate the familiar corridors of Hogwarts with the infamous Voldemort.",
        created_at=date(2023, 2, 22)
    )
    news_article4 = NewsArticle (
        user_id=4,
        title='A group of tactics gamers simultaneously collapsed',
        preview_image='https://gamingtrend.com/wp-content/uploads/2022/11/Dragon02.jpg',
        description="A new epidemic of fainting has occurred as the craziest new tactics game made tactics gamers even more...",
        content="In a development that has sent shockwaves through the gaming community, a group of tactics gamers was reported to have simultaneously collapsed during a recent gaming session. The cause? The release of a new and wildly intense tactics game, which, due to its complexity and strategic depth, has apparently overwhelmed its audience. This unusual incident has been dubbed as a new epidemic of fainting, marking a bizarre footnote in gaming history. In a world where gamers constantly seek more intricate, challenging, and mind-bending experiences, the introduction of this new tactics game has cranked up the intensity to unforeseen levels. The strategy game, praised for its intricate mechanics and strategic depth, demands a level of concentration, tactical planning, and split-second decision-making that apparently pushed its audience beyond their limits. It has led to an unexpected epidemic of fainting amongst its players, causing concern in the gaming community and raising questions about the physical impacts of high-intensity gaming. As investigations continue and the developers address this extraordinary event, tactics gamers everywhere are left to wonder: just how intense can gaming become before it becomes too much?",
        created_at=date(2023, 3, 15)
    )
    news_article5 = NewsArticle (
        user_id=2,
        title="Mario's new growth spurt has everyone on edge",
        preview_image='https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/12/29/d525d9bc-765b-41d2-9906-af2b72c54353/mario-gta',
        description="Gamers all over the world are too used to their plumber friend being on the bit of the shorter side...",
        content="In an unexpected twist that has left the gaming world on edge, everyone's favorite Italian plumber has undergone a striking transformation. Mario, the iconic character from Nintendo's beloved franchise, has apparently experienced a sudden growth spurt in his latest gaming installment. This surprising alteration to Mario's character design has shocked fans worldwide, who have grown accustomed to their cheerful and somewhat short-statured hero. This dramatic change in Mario's appearance has caused quite a stir amongst the gaming community. Gamers around the globe, who are used to navigating the Mushroom Kingdom with a shorter and more familiar version of Mario, are now learning to adapt to his new towering presence. The shift not only adds an intriguing aesthetic change, but it also alters the gameplay dynamics significantly, forcing players to rethink their strategies and playstyles. As the gaming community comes to terms with this towering new version of Mario, it is clear that Nintendo continues to push boundaries and surprise its fans, redefining our expectations of even their most iconic characters.",
        created_at=date(2023, 4, 10)
    )
    news_article6 = NewsArticle (
        user_id=3,
        title="Litendo decides that squirtles should have Teenage Mutant Ninja Turtle weapons",
        preview_image='https://static1.thegamerimages.com/wordpress/wp-content/uploads/2018/11/1-Wallpaper-Abyss-1.jpg',
        description="Squirtles now come with all new weapons based on another beloved cartoon",
        content="In an exciting and nostalgic crossover that fans could only dream of, Litendo has recently announced that Squirtles, the lovable water-type Pokémon, will now be armed with weapons inspired by the iconic Teenage Mutant Ninja Turtles (TMNT). This novel integration seeks to blend two distinct universes, combining the classic charm of Squirtles with the high-energy action of the TMNT, giving players an entirely new perspective on these beloved characters. The familiar TMNT arsenal, including Leonardo's katanas, Raphael's sais, Michelangelo's nunchaku, and Donatello's bo staff, are now at the disposal of the playful Squirtles. With these new weapons in their tiny hands, Squirtles will deliver unique gameplay experiences as they swing, jab, and twirl their way through battles. This innovative decision by Litendo not only creates a fascinating mash-up of two cherished franchises, but also provides a fresh take on Squirtles' battling dynamics. As anticipation builds, fans around the globe eagerly await the opportunity to embark on this one-of-a-kind adventure, guiding their armed Squirtles in a gaming experience that promises to be as exciting as it is nostalgic.",
        created_at=date(2023, 6, 11)
    )

    db.session.add(demo)
    db.session.add(gahyeon)
    db.session.add(bobbie)
    db.session.add(godmode)
    db.session.add(marnz)

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
    db.session.add(news_article4)
    db.session.add(news_article5)
    db.session.add(news_article6)

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
