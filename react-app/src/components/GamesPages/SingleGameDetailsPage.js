import { useParams } from 'react-router-dom'
import './SingleGameDetailsPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getSingleGameThunk } from '../../store/games'

const SingleGameDetailsPage = () => {
    const { gameId } = useParams()
    const dispatch = useDispatch()
    const singleGameDetails = useSelector(state => state.games.singleGame)

    // console.log(singleGameDetails)
    useEffect(() => {
        dispatch(getSingleGameThunk(gameId))
    }, [dispatch, gameId])

    if (!singleGameDetails) return null

    const { game_images } = singleGameDetails
    if (!game_images || game_images.length === 0) return null

    const previewImage = singleGameDetails.game_images.find(game => game.preview === true)
    if (!previewImage.url) return null

    const dateFormatting = new Date(singleGameDetails.release_date)

    const releaseDateFormatting = dateFormatting.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: '2-digit'
    })

    console.log('GAAAMEIMAGES', game_images)

    return (
        <>
            <h1>WHOOA</h1>
            <img
                src={previewImage.url} alt='single-game-preview'
            />
            {game_images.map((image) => {
                return (
                    <img
                        src={image.url}
                        alt={`Details page images ${image.id}`}
                        style={{ maxHeight: '15rem' }}
                    >
                    </img>
                )
            })}
            <p>{singleGameDetails.description}</p>
            <p>{singleGameDetails.developer}</p>
            <p>{singleGameDetails.genre}</p>
            <p>{singleGameDetails.price}</p>
            <p>{releaseDateFormatting}</p>
        </>
    )
}

export default SingleGameDetailsPage
