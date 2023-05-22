import { useEffect, useState } from 'react'
// import './DeleteComment.css'
import { useDispatch } from 'react-redux'
import { deleteGameThunk, getAllGamesThunk } from '../../store/games'
import { useModal } from '../../context/Modal'
import { useHistory, useParams } from 'react-router-dom'
import { deleteCommentThunk } from '../../store/comments'

const DeleteCommentModal = ({gameId, commentId}) => {
    // const { gameId } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const { closeModal } = useModal()
    const [,forceRerender2] = useState('')


    const cancelGameDeleteHandler = () => {
        closeModal()
    }


    const deleteCommentHandler = async (commentId) => {
       await dispatch(deleteCommentThunk(commentId))
        // dispatch(getAllGamesThunk())
        closeModal()
        forceRerender2()
        history.push('/games')
        history.push(`/games/${gameId}`)
    }

    return (
        <div>
            <h1>Are you sure you want to delete this game?</h1>
            <h2>This action cannot be reversed.</h2>

            <button
            onClick={() => cancelGameDeleteHandler()}
            >Cancel</button>
            <button
            onClick={() => deleteCommentHandler(commentId)}
            >Delete</button>
        </div>
    )
}

export default DeleteCommentModal
