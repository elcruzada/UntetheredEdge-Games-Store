import { useHistory, useParams } from 'react-router-dom'
import './SingleGameDetailsPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getSingleGameThunk } from '../../store/games'
import { getAllCommentsThunk } from '../../store/comments'
import OpenModalButton from '../OpenModalButton'
import DeleteCommentModal from '../CommentModals/DeleteComment'
import PostCommentModal from '../CommentModals/PostComment'
import UpdateCommentModal from '../CommentModals/UpdateComment'
import Carousel from '../UI/Carousel'
import './SingleGameDetailsPage.css'
import { getUserCartThunk, postUserCartThunk } from '../../store/cart'

const SingleGameDetailsPage = () => {
    const { gameId } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const singleGameDetails = useSelector(state => state.games.singleGame)
    // console.log('COMMMENTS', singleGameDetails.comments)
    const allGameComments = useSelector(state => state.comments)
    console.log(allGameComments)
    const sessionUser = useSelector(state => state.session.user)

    const [cartAdded, setCartAdded] = useState(false)
    // console.log(singleGameDetails)
    useEffect(() => {
        dispatch(getSingleGameThunk(gameId))
    }, [dispatch, gameId])

    useEffect(() => {
        dispatch(getUserCartThunk())
    }, [dispatch])
    // useEffect(() => {
    //     dispatch(getAllCommentsThunk(gameId))
    // }, [dispatch, gameId])

    const addToCartHandler = async (gameId) => {
        await dispatch(postUserCartThunk(gameId))
        setCartAdded(true)
        history.push(`/games/${gameId}`)
    }

    const viewInCartHandler = async () => {
        if (sessionUser) {
            history.push(`/cart`)
        }
    }

    if (!singleGameDetails) return null

    const { game_images } = singleGameDetails
    if (!game_images || game_images.length === 0) return null

    // const previewImage = singleGameDetails.game_images.find(game => game.preview === true)
    const previewImage = singleGameDetails.preview
    // console.log('PREEVIEW', previewImage)
    const noPreview = singleGameDetails.game_images.find(game => game.preview === false)
    // const previewImage = singleGameDetails.preview
    // if (!previewImage.url || !noPreview.game_images.url) return null

    // console.log('NOOOOOO', noPreview)
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

                    {
                        !cartAdded ?
                            <p
                                onClick={() => addToCartHandler(gameId)}
                                style={{ cursor: 'pointer' }}
                            >ADD TO CART</p>
                            :
                            <p
                                onClick={viewInCartHandler}
                                style={{ cursor: 'pointer' }}
                            >
                                VIEW IN CART
                            </p>
                    }
                    <div>

                        <hr style={{ color: 'black', backgroundColor: 'white', height: 2 }} />
                    </div>

                    {!sessionUser && <h2
                        style={{ border: '1px solid white', width: '20rem', padding: '1rem', color: 'black', backgroundColor: 'white', fontWeight: 'bold', borderRadius: '5px', textAlign: 'center' }}
                    >Log in to leave a comment!</h2>}

                    {gameId && sessionUser &&
                        <OpenModalButton
                            buttonText='CLICK TO LEAVE A COMMENT. LET THE DEVELOPER KNOW WHAT YOU THINK!'
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
