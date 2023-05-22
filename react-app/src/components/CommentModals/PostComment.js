import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useModal } from '../../context/Modal'

import './PostComment.css'
import { getAllCommentsThunk, postCommentThunk } from '../../store/comments'
import { getAllGamesThunk } from '../../store/games'


//need star rating
const PostCommentModal = ({ gameId }) => {
    const dispatch = useDispatch()
    const comments = useSelector(state => state.comments)
    const history = useHistory()
    const [comment, setComment] = useState('')
    const [errors, setErrors] = useState({})
    const [,forceRerender] = useState('')
    const { closeModal } = useModal()


    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('game_id', gameId)
        formData.append('comment', comment)

        await dispatch(postCommentThunk(gameId, formData))



        await dispatch(getAllGamesThunk())
        closeModal()
        forceRerender()
        history.push('/games')
        history.push(`/games/${gameId}`)

    }

    return (
        <div>
            <form
                className="post-review-modal-container"
                onSubmit={submitHandler}
            >

                <h1 className='how-stay'>Thoughts?</h1>
                <textarea
                    className="commentModalText"
                    id='postReviewModal'
                    type='text'
                    placeholder='Leave a comment'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />

                <button
                    className='post-review-modal-button'
                    disabled={comment.length < 10 ? true : false}
                >Post Comment</button>
            </form>
        </div>
    )

}

export default PostCommentModal
