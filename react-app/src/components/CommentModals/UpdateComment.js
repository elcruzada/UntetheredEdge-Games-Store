import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSingleGameThunk, updateGameThunk } from "../../store/games"
import { useModal } from "../../context/Modal"
import { useHistory } from "react-router-dom"
import { updateCommentThunk } from "../../store/comments"


const UpdateCommentModal = ({commentId, gameId}) => {
    const dispatch = useDispatch()
    const { closeModal } = useModal()
    const [editComment, setEditComment] = useState('')
    const history = useHistory()
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (!editComment) errors.comment = "Comment is required"
        if (editComment.length < 10) errors.comment = "Comment must be longer than 10 characters"
    }, [editComment])

    const submitHandler = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('game_id', gameId)
        formData.append('comment', editComment)

        await dispatch(updateCommentThunk(commentId, formData))
        closeModal()
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
                    id='editReviewModal'
                    type='text'
                    placeholder='Leave a comment'
                    value={editComment}
                    onChange={(e) => setEditComment(e.target.value)}
                />
                {errors && errors.comment && <p>{errors.comment}</p>}
                <button
                    className='post-review-modal-button'
                    disabled={editComment.length < 10 ? true : false}
                >Edit Comment</button>
            </form>
        </div>
    )
}

export default UpdateCommentModal
