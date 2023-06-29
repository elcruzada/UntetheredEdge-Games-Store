import { useEffect, useState } from 'react'
// import './DeleteComment.css'
import { useDispatch } from 'react-redux'
import { deleteGameThunk, getAllGamesThunk, getSingleGameThunk } from '../../store/games'
import { useModal } from '../../context/Modal'
import { useHistory, useParams } from 'react-router-dom'
import { deleteCommentThunk } from '../../store/comments'

const DeleteCommentModal = ({gameId, commentId}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { closeModal } = useModal()
    const [,forceRerender2] = useState('')


    const cancelGameDeleteHandler = () => {
        closeModal()
    }


    const deleteCommentHandler = async (gameId, commentId) => {
        await dispatch(deleteCommentThunk(commentId))
        await dispatch(getSingleGameThunk(gameId))

        closeModal()

        history.push(`/games/${gameId}`)
    }

    return (
        <div className='modal'>
            <h1>Are you sure you want to delete this game?</h1>
            <h2>This action cannot be reversed.</h2>

            <button
            onClick={() => cancelGameDeleteHandler()}
            >Cancel</button>
            <button
            onClick={() => deleteCommentHandler(gameId, commentId)}
            >Delete</button>
        </div>
    )
}

export default DeleteCommentModal
