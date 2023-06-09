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
import Carousel, { SingleGameCarousel } from '../UI/Carousel'
import './SingleGameDetailsPage.css'
import { getUserCartThunk, postUserCartThunk } from '../../store/cart'
import LowerNavBar from '../LowerNavBar/LowerNavBar'
import Footer from '../UI/Footer'
import LoadingScreen from '../UI/Loading/LoadingScreen'

const SingleGameDetailsPage = () => {
    const { gameId } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const singleGameDetails = useSelector(state => state.games.singleGame)
    const allGameComments = useSelector(state => state.comments)
    const sessionUser = useSelector(state => state.session.user)
    const [loading, setLoading] = useState(true);

    const [cartAdded, setCartAdded] = useState(false)
    // console.log('SIINGLE', singleGameDetails)
    useEffect(() => {
        dispatch(getSingleGameThunk(gameId)).then(() => {
            setLoading(false);
        })
    }, [dispatch, gameId])

    useEffect(() => {
        dispatch(getUserCartThunk())
    }, [dispatch])

    const addToCartHandler = async (gameId) => {
        if (!sessionUser) {
            window.alert('You must be logged in to add to your cart')
        } else {
            await dispatch(postUserCartThunk(gameId))
            setCartAdded(true)
            history.push(`/games/${gameId}`)
        }
    }

    const viewInCartHandler = async () => {
        if (!sessionUser) {
            window.alert('You must be logged in to view your cart')
        } else {
            history.push(`/cart`)
        }
    }

    const { game_images } = singleGameDetails
    const dateFormatting = new Date(singleGameDetails.release_date)

    const releaseDateFormatting = dateFormatting.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: '2-digit'
    })

    if (!singleGameDetails) return null

    let orderedComments;
    if (singleGameDetails.comments) {
        orderedComments = [...singleGameDetails.comments].reverse()
    }



    return (
        <>
            {
                loading ? <LoadingScreen /> :

                    <div className='single-details-page-wrapper'>
                        <div className='single-details-page-inner-wrapper'>
                            <LowerNavBar sessionUser={sessionUser} />
                            <h1
                                style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}
                            >{singleGameDetails && singleGameDetails.name}</h1>
                            <div className='single-details-page-left-right-column'>
                                <div className='single-details-page-left-column'>
                                    {singleGameDetails &&
                                        game_images &&
                                        game_images.length &&
                                        (singleGameDetails.preview ? (
                                            <img
                                                src={singleGameDetails.preview
                                                    || 'https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'} alt='preview-image' />
                                        ) : (
                                            <img src={
                                                // noPreview.url
                                                (game_images[0] && singleGameDetails.game_images[0].url)
                                                || 'https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'} alt='preview-image' />
                                        ))}
                                </div>
                                <div className='single-game-details-right-column'>
                                    <div className='singleGameDetails-game-details'>
                                        <p className='singleGameDetails-game-details-tag'>Price</p>
                                        <p>${singleGameDetails && singleGameDetails.price}</p>
                                    </div>
                                    {
                                        !cartAdded ?
                                            <p
                                                className='add-to-cart'
                                                onClick={() => addToCartHandler(gameId)}
                                                style={{ cursor: 'pointer', border: '3px solid white', fontWeight: 'bold', padding: '1rem' }}
                                            >ADD TO CART</p>
                                            :
                                            <p
                                                className='add-to-cart'
                                                onClick={viewInCartHandler}
                                                style={{ cursor: 'pointer', border: '3px solid white', fontWeight: 'bold', padding: '1rem' }}
                                            >
                                                VIEW IN CART
                                            </p>
                                    }
                                    <div className='singleGameDetails-game-details'>
                                        <p className='singleGameDetails-game-details-tag'>Developer</p>
                                        <p>{singleGameDetails && singleGameDetails.developer}</p>
                                    </div>
                                    <div className='singleGameDetails-game-details'>
                                        <p className='singleGameDetails-game-details-tag'>Publisher</p>
                                        <p>{singleGameDetails && singleGameDetails.publisher &&
                                            (singleGameDetails.publisher === 'UntetheredEdge Interactive'
                                                ?
                                                'UE Interactive'
                                                :
                                                singleGameDetails.publisher
                                            )
                                        }</p>
                                    </div>
                                    <div className='singleGameDetails-game-details'>
                                        <p className='singleGameDetails-game-details-tag'>Release Date</p>
                                        <p>{singleGameDetails && releaseDateFormatting}</p>
                                    </div>
                                    <div className='singleGameDetails-game-details'>
                                        <p className='singleGameDetails-game-details-tag'>Genre</p>
                                        <p>{singleGameDetails && singleGameDetails.genre}</p>
                                    </div>
                                </div>
                            </div>
                            {
                                game_images && game_images.length &&
                                <SingleGameCarousel images={game_images} />
                            }
                            <p
                                style={{ paddingBottom: '2rem' }}
                            >{singleGameDetails && singleGameDetails.description}
                            </p>
                            <div className='game-comments-divider'>
                                <hr style={{ color: 'black', backgroundColor: 'white', height: 2 }} />
                            </div>

                            {!sessionUser && <h2
                                style={{ border: '1px solid white', width: '20rem', padding: '.5rem', color: 'black', backgroundColor: 'white', fontWeight: 'bold', borderRadius: '5px', textAlign: 'center', margin: '1rem' }}
                            >Log in to leave a comment!</h2>}

                            {gameId && sessionUser &&
                                <>
                                    <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>LET THE DEVELOPER KNOW WHAT YOU THINK</h3>
                                    <p style={{ marginBottom: '.25rem' }}>Loved the game? Couldn't stand it? Our developers value feedback from players like you! </p>
                                    <p style={{ marginBottom: '1rem' }}>Help build our community by sharing your thoughts to our developers.
                                    </p>
                                    <div style={{width: '5rem'}}>

                                    <OpenModalButton
                                        buttonText='LEAVE A COMMENT'
                                        modalComponent={<PostCommentModal gameId={gameId} />}
                                    />
                                    </div>
                                </>
                            }
                            <div className='comments-list'>
                                <ul style={{width:'15rem'}}>
                                    {singleGameDetails &&
                                        singleGameDetails.comments &&
                                        orderedComments
                                        && orderedComments.map(comment =>
                                        (
                                            <li key={comment.id}
                                                style={{ fontWeight: 'bold', border: '1px solid white', borderRadius: '10px', width: '40rem', paddingTop: '.5rem', paddingBottom: '.5rem', paddingLeft: '.5rem', paddingRight: '0rem', margin: '1rem', backgroundColor: 'rgb(40, 42, 58)'}}
                                            >
                                                <p
                                                    style={{ padding: '2px', width: '40rem' }}
                                                >{new Date(comment.created_at).toLocaleDateString('en-US', {
                                                    month: '2-digit',
                                                    day: '2-digit',
                                                    year: '2-digit'
                                                })}</p>
                                                <div
                                                    style={{ padding: '1rem', fontSize: '14px', width: '40rem' }}
                                                >
                                                    <p
                                                    >{`"${comment.comment}"`}</p>

                                                </div>
                                                {sessionUser && sessionUser.id && comment.user_id && sessionUser.id === comment.user_id &&


                                                    <OpenModalButton
                                                        buttonText="Update"
                                                        modalComponent={<UpdateCommentModal
                                                            comment={comment.comment}
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
            }
            <Footer />
        </>
    )
}

export default SingleGameDetailsPage
