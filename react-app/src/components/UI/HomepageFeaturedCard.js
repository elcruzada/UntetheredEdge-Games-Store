import { useState } from 'react';
import './HomepageFeaturedCard.css'
import HomepageFeaturedRightColumnCard from './HomepageFeaturedRightColumnCard'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const HomepageFeaturedCard = ({ allGames }) => {
    const history = useHistory()
    const promotedGames = Object.values(allGames)
    const [bigPictureSource, setBigPictureSource] = useState('');
    const [currentGameId, setCurrentGameId] = useState('')

    const cardClickHandler = (previewImage) => {
        setBigPictureSource(previewImage);
        // setCurrentGameId()
    };

    const setGameIdHandler = (id) => {
        setCurrentGameId(id)
    }

    const singleGameDetailsPageRedirect = () => {
        if (currentGameId) {
            history.push(`/games/${currentGameId}`)
        } else {
            history.push(`/games/${firstPromotedGamePreview.id}`)
        }
    }

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
                <div className="featured-games-homepage-big-picture-left-column"
                onClick={singleGameDetailsPageRedirect}
                >
                    <img
                        src={bigPictureSource || previewImage.url}
                        alt='featured-big-picture-preview'>
                    </img>
                </div>
                <div className="featured-games-homepage-little-pictures-right-column">


                    <HomepageFeaturedRightColumnCard
                        currentGameId={firstPromotedGamePreview.id}
                        previewImage={previewImage.url}
                        title={firstPromotedGamePreview.name}
                        alt={`Featured preview: ${firstPromotedGamePreview.id}`}
                        cardClickHandler={cardClickHandler}
                        setGameIdHandler={setGameIdHandler}
                    />
                    <HomepageFeaturedRightColumnCard
                        currentGameId={secondPromotedGamePreview.id}
                        previewImage={secondPreviewImage.url}
                        title={secondPromotedGamePreview.name}
                        alt={`Featured preview: ${secondPromotedGamePreview.id}`}
                        cardClickHandler={cardClickHandler}
                        setGameIdHandler={setGameIdHandler}
                    />
                    <HomepageFeaturedRightColumnCard
                        currentGameId={thirdPromotedGamePreview.id}
                        previewImage={thirdPreviewImage.url}
                        title={thirdPromotedGamePreview.name}
                        alt={`Featured preview: ${thirdPromotedGamePreview.id}`}
                        cardClickHandler={cardClickHandler}
                        setGameIdHandler={setGameIdHandler}
                    />
                    <HomepageFeaturedRightColumnCard
                        currentGameId={fourthPromotedGamePreview.id}
                        previewImage={fourthPreviewImage.url}
                        title={fourthPromotedGamePreview.name}
                        alt={`Featured preview: ${fourthPromotedGamePreview.id}`}
                        cardClickHandler={cardClickHandler}
                        setGameIdHandler={setGameIdHandler}
                    />
                    <HomepageFeaturedRightColumnCard
                        currentGameId={fifthPromotedGamePreview.id}
                        previewImage={fifthPreviewImage.url}
                        title={fifthPromotedGamePreview.name}
                        alt={`Featured preview: ${fifthPromotedGamePreview.id}`}
                        cardClickHandler={cardClickHandler}
                        setGameIdHandler={setGameIdHandler}
                    />
                    <HomepageFeaturedRightColumnCard
                        currentGameId={sixthPromotedGamePreview.id}
                        previewImage={sixthPreviewImage.url}
                        title={sixthPromotedGamePreview.name}
                        alt={`Featured preview: ${sixthPromotedGamePreview.id}`}
                        cardClickHandler={cardClickHandler}
                        setGameIdHandler={setGameIdHandler}
                    />

                </div>
            </div>
        </>
    )
}

export default HomepageFeaturedCard
