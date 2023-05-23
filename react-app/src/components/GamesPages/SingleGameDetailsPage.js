import { useParams } from 'react-router-dom'
import './SingleGameDetailsPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getSingleGameThunk } from '../../store/games'
import { getAllCommentsThunk } from '../../store/comments'
import OpenModalButton from '../OpenModalButton'
import DeleteCommentModal from '../CommentModals/DeleteComment'
import PostCommentModal from '../CommentModals/PostComment'
import UpdateCommentModal from '../CommentModals/UpdateComment'
import Carousel from '../UI/Carousel'
import './SingleGameDetailsPage.css'

const SingleGameDetailsPage = () => {
    const { gameId } = useParams()
    const dispatch = useDispatch()
    const singleGameDetails = useSelector(state => state.games.singleGame)
    console.log('COMMMENTS', singleGameDetails.comments)
    const allGameComments = useSelector(state => state.comments)
    console.log(allGameComments)
    const sessionUser = useSelector(state => state.session.user)

    // console.log(singleGameDetails)
    useEffect(() => {
        dispatch(getSingleGameThunk(gameId))
    }, [dispatch, gameId])

    // useEffect(() => {
    //     dispatch(getAllCommentsThunk(gameId))
    // }, [dispatch, gameId])

    if (!singleGameDetails) return null

    const { game_images } = singleGameDetails
    if (!game_images || game_images.length === 0) return null

    // const previewImage = singleGameDetails.game_images.find(game => game.preview === true)
    const previewImage = singleGameDetails.preview
    console.log('PREEVIEW', previewImage)
    const noPreview = singleGameDetails.game_images.find(game => game.preview === false)
    // const previewImage = singleGameDetails.preview
    // if (!previewImage.url || !noPreview.game_images.url) return null

    console.log('NOOOOOO', noPreview)
    const dateFormatting = new Date(singleGameDetails.release_date)

    const releaseDateFormatting = dateFormatting.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: '2-digit'
    })


    // console.log('GAAAMEIMAGES', game_images)
    //deal with the preview images rendering
    return (
        <>
            <div className='single-details-page-wrapper'>

                <div className='single-details-page-inner-wrapper'>



                    <h1>{singleGameDetails && singleGameDetails.name}</h1>
                    {previewImage ? (
                        <img src={previewImage} alt='preview-image' />
                    ) : (
                        <img src={noPreview.url} alt='preview-image' />
                    )}
                    {/* {game_images.map((image) => {
                return (
                    <img
                        src={image.url}
                        alt={`Details page images ${image.id}`}
                        style={{ maxHeight: '15rem' }}
                    >
                    </img>
                )
            })} */}
                    <Carousel images={game_images} />
                    <p>{singleGameDetails.description}</p>
                    <p>{singleGameDetails.developer}</p>
                    <p>{singleGameDetails.genre}</p>
                    <p>{singleGameDetails.price}</p>
                    <p>{releaseDateFormatting}</p>

                    <hr style={{ color: 'black', backgroundColor: 'black', height: 1 }} />

                    {!sessionUser && <h2>Log in to leave a comment!</h2>}

                    {gameId && sessionUser &&
                        <OpenModalButton
                            buttonText='Let the developer know what you think!'
                            modalComponent={<PostCommentModal gameId={gameId} />}
                        />
                    }
                    <div className='comments-list'>
                        <ul>
                            {singleGameDetails &&
                                singleGameDetails.comments
                                && singleGameDetails.comments.map(comment =>
                                (
                                    <li key={comment.id}
                                        style={{ border: '1px solid white', width: '15rem' }}
                                    >
                                        <p>{new Date(comment.created_at).toLocaleDateString('en-US', {
                                            month: '2-digit',
                                            day: '2-digit',
                                            year: '2-digit'
                                        })}</p>
                                        <p>{`"${comment.comment}"`}</p>
                                        {sessionUser && sessionUser.id && comment.user_id && sessionUser.id === comment.user_id &&


                                            <OpenModalButton
                                                buttonText="Update"
                                                modalComponent={<UpdateCommentModal
                                                    commentId={comment.id}
                                                    gameId={gameId}
                                                />}
                                            />
                                        }

                                        {sessionUser && sessionUser.id && comment.user_id && sessionUser.id === comment.user_id &&
                                            <OpenModalButton
                                                buttonText="Delete"
                                                modalComponent={<DeleteCommentModal
                                                    gameId={gameId}
                                                    commentId={comment.id} />}
                                            />
                                        }

                                    </li>
                                )
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleGameDetailsPage
