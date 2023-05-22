import { useEffect } from 'react'
// import './DeleteComment.css'
import { useDispatch } from 'react-redux'
import { deleteGameThunk, getAllGamesThunk } from '../../store/games'
import { useModal } from '../../context/Modal'
import { useHistory } from 'react-router-dom'
import { deleteCommentThunk } from '../../store/comments'

const DeleteCommentModal = ({commentId}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { closeModal } = useModal()

    const cancelGameDeleteHandler = () => {
        closeModal()
    }


    const deleteCommentHandler = (commentId) => {
        dispatch(deleteCommentThunk(commentId))
        closeModal()
        dispatch(getAllGamesThunk())
        // history.push('/games/')
    }

    return (
        <div>
            <h1>Are you sure you want to delete this game?</h1>
            <h2>This action cannot be reversed.</h2>

            <button
            onClick={cancelGameDeleteHandler}
            >Cancel</button>
            <button
            onClick={() => deleteCommentHandler(commentId)}
            >Delete</button>
        </div>
    )
}

export default DeleteCommentModal
