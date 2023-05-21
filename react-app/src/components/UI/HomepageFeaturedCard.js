import './HomepageFeaturedCard.css'
import HomepageFeaturedRightColumnCard from './HomepageFeaturedRightColumnCard'

const HomepageFeaturedCard = ({ allGames }) => {

    const promotedGames = Object.values(allGames)
    const firstPromotedGamePreview = promotedGames[0]
    if (!firstPromotedGamePreview) return null
    const previewImage = firstPromotedGamePreview.game_images.find(game => game.preview === true)
    if (!previewImage.url) return null

    const secondPromotedGamePreview = promotedGames[1]
    if (!secondPromotedGamePreview) return null
    const secondPreviewImage = secondPromotedGamePreview.game_images.find(game => game.preview === true)
    if (!secondPreviewImage.url) return null


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

                   
                    <HomepageFeaturedRightColumnCard
                    previewImage={previewImage.url}
                    title={firstPromotedGamePreview.name}
                    />
                    <HomepageFeaturedRightColumnCard
                    previewImage={secondPreviewImage.url}
                    title={secondPromotedGamePreview.name}
                    />

                    <div className='featured-games-homepage-little-pictures-right-column-image-title-card'>
                        <div className='featured-games-homepage-little-pictures-right-column-image-title-card-image'>
                            <img
                                src={previewImage.url}
                            />
                        </div>
                        <div className='featured-games-homepage-little-pictures-right-column-image-title-card-image-title'>

                        <p>{firstPromotedGamePreview.name}</p>
                        </div>
                    </div>
                    <div className='featured-games-homepage-little-pictures-right-column-image-title-card'>
                        <div className='featured-games-homepage-little-pictures-right-column-image-title-card-image'>
                            <img
                                src={previewImage.url}
                            />
                        </div>
                        <div className='featured-games-homepage-little-pictures-right-column-image-title-card-image-title'>

                        <p>{firstPromotedGamePreview.name}</p>
                        </div>
                    </div>
                    <div className='featured-games-homepage-little-pictures-right-column-image-title-card'>
                        <div className='featured-games-homepage-little-pictures-right-column-image-title-card-image'>
                            <img
                                src={previewImage.url}
                            />
                        </div>
                        <div className='featured-games-homepage-little-pictures-right-column-image-title-card-image-title'>

                        <p>{firstPromotedGamePreview.name}</p>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default HomepageFeaturedCard
