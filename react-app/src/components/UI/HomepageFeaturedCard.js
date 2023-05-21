import './HomepageFeaturedCard.css'

const HomepageFeaturedCard = ({allGames}) => {

    const promotedGames = Object.values(allGames)
    const firstPromotedGamePreview = promotedGames[0]
    if (!firstPromotedGamePreview) return null
    const previewImage = firstPromotedGamePreview.game_images.find(game => game.preview === true)
    if (!previewImage.url) return null



    return (
        <>
            <div className="featured-games-homepage-wrapper">
                <div className="featured-games-homepage-big-picture-left-column">
                    <img
                    src={previewImage.url}
                    alt='featured-preview-1'>
                    </img>
                </div>
                <div className="featured-games-homepage-little-pictures-right-column">

                    <img
                    src={'https://i.chzbgr.com/full/8804529408/hBF54E19E/a-game-with-layers'}
                    >
                    </img>
                    <img
                    src={'https://i.chzbgr.com/full/8804529408/hBF54E19E/a-game-with-layers'}
                    >
                    </img>
                    <img
                    src={'https://i.chzbgr.com/full/8804529408/hBF54E19E/a-game-with-layers'}
                    >
                    </img>
                    <img
                    src={'https://i.chzbgr.com/full/8804529408/hBF54E19E/a-game-with-layers'}
                    >
                    </img>
                    <img
                    src={'https://i.chzbgr.com/full/8804529408/hBF54E19E/a-game-with-layers'}
                    >
                    </img>
                    <img
                    src={'https://i.chzbgr.com/full/8804529408/hBF54E19E/a-game-with-layers'}
                    >
                    </img>
                </div>
            </div>
        </>
    )
}

export default HomepageFeaturedCard
