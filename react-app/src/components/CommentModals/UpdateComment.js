import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useModal } from "../../context/Modal"
import { useHistory } from "react-router-dom"
import { updateCommentThunk } from "../../store/comments"


const UpdateCommentModal = ({comment, commentId, gameId}) => {
    const dispatch = useDispatch()
    const { closeModal } = useModal()
    const [editComment, setEditComment] = useState('')
    const history = useHistory()
    const [errors, setErrors] = useState({})

    useEffect(() => {
        const err = {}
        if (!editComment) err.comment = "Comment is required"
        if (editComment.length < 10) err.comment = "Comment must be longer than 10 characters"
        setErrors(err)
    }, [editComment])

    useEffect(() => {
        setEditComment(comment)
    }, [comment])

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
                className="post-comment-modal-container"
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
                {errors.comment &&
                <p
                style={{fontSize: '12px', paddingBottom: '.5rem'}}
                >{errors.comment}</p>}
                <button
                    className='post-comment-modal-button'
                    disabled={editComment.length < 10 ? true : false}
                >Edit Comment</button>
            </form>
        </div>
    )
}

export default UpdateCommentModal
