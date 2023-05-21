import { useState } from 'react';
import './HomepageFeaturedCard.css'
import HomepageFeaturedRightColumnCard from './HomepageFeaturedRightColumnCard'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const HomepageFeaturedCard = ({ allGames }) => {
    const promotedGames = Object.values(allGames)
    const [bigPictureSource, setBigPictureSource] = useState('');

    const cardClickHandler = (previewImage) => {
        setBigPictureSource(previewImage);
    };


    useEffect(() => {
        console.log('BIIIIG', bigPictureSource)
    }, [bigPictureSource])

    const firstPromotedGamePreview = promotedGames[0]
    if (!firstPromotedGamePreview) return null
    const previewImage = firstPromotedGamePreview.game_images.find(game => game.preview === true)
    if (!previewImage.url) return null

    const secondPromotedGamePreview = promotedGames[1]
    if (!secondPromotedGamePreview) return null
    const secondPreviewImage = secondPromotedGamePreview.game_images.find(game => game.preview === true)
    if (!secondPreviewImage.url) return null

    const thirdPromotedGamePreview = promotedGames[2]
    if (!thirdPromotedGamePreview) return null
    const thirdPreviewImage = thirdPromotedGamePreview.game_images.find(game => game.preview === true)
    if (!thirdPreviewImage.url) return null

    const fourthPromotedGamePreview = promotedGames[3]
    if (!fourthPromotedGamePreview) return null
    const fourthPreviewImage = fourthPromotedGamePreview.game_images.find(game => game.preview === true)
    if (!fourthPreviewImage.url) return null

    const fifthPromotedGamePreview = promotedGames[4]
    if (!fifthPromotedGamePreview) return null
    const fifthPreviewImage = fifthPromotedGamePreview.game_images.find(game => game.preview === true)
    if (!fifthPreviewImage.url) return null

    const sixthPromotedGamePreview = promotedGames[5]
    if (!sixthPromotedGamePreview) return null
    const sixthPreviewImage = sixthPromotedGamePreview.game_images.find(game => game.preview === true)
    if (!sixthPreviewImage.url) return null


    return (
        <>
            <div className="featured-games-homepage-wrapper">
                <div className="featured-games-homepage-big-picture-left-column">
                    <img
                        src={bigPictureSource || previewImage.url}
                        alt='featured-big-picture-preview'>
                    </img>
                </div>
                <div className="featured-games-homepage-little-pictures-right-column">


                    <HomepageFeaturedRightColumnCard
                        previewImage={previewImage.url}
                        title={firstPromotedGamePreview.name}
                        alt={`Featured preview: ${firstPromotedGamePreview.id}`}
                        cardClickHandler={cardClickHandler}
                    />
                    <HomepageFeaturedRightColumnCard
                        previewImage={secondPreviewImage.url}
                        title={secondPromotedGamePreview.name}
                        alt={`Featured preview: ${secondPromotedGamePreview.id}`}
                        cardClickHandler={cardClickHandler}
                    />
                    <HomepageFeaturedRightColumnCard
                        previewImage={thirdPreviewImage.url}
                        title={thirdPromotedGamePreview.name}
                        alt={`Featured preview: ${thirdPromotedGamePreview.id}`}
                        cardClickHandler={cardClickHandler}
                    />
                    <HomepageFeaturedRightColumnCard
                        previewImage={fourthPreviewImage.url}
                        title={fourthPromotedGamePreview.name}
                        alt={`Featured preview: ${fourthPromotedGamePreview.id}`}
                        cardClickHandler={cardClickHandler}
                    />
                    <HomepageFeaturedRightColumnCard
                        previewImage={fifthPreviewImage.url}
                        title={fifthPromotedGamePreview.name}
                        alt={`Featured preview: ${fifthPromotedGamePreview.id}`}
                        cardClickHandler={cardClickHandler}
                    />
                    <HomepageFeaturedRightColumnCard
                        previewImage={sixthPreviewImage.url}
                        title={sixthPromotedGamePreview.name}
                        alt={`Featured preview: ${sixthPromotedGamePreview.id}`}
                        cardClickHandler={cardClickHandler}
                    />

                </div>
            </div>
        </>
    )
}

export default HomepageFeaturedCard
