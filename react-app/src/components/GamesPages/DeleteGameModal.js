import { useEffect } from 'react'
import './DeleteGameModal.css'
import { useDispatch } from 'react-redux'
import { deleteGameThunk, getAllGamesThunk } from '../../store/games'
import { useModal } from '../../context/Modal'
import { useHistory } from 'react-router-dom'

const DeleteGameModal = ({gameId}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { closeModal } = useModal()

    const cancelGameDeleteHandler = () => {
        closeModal()
    }

    const deleteGameHandler = (gameId) => {
        dispatch(deleteGameThunk(gameId))
        closeModal()
        dispatch(getAllGamesThunk())
        history.push('/developer')
        history.push('/developer/portal')
    }

    return (
        <>
        <div className='modal'>
            <h1>Are you sure you want to delete this game?</h1>
            <h2>This action cannot be reversed.</h2>

            <button
            onClick={cancelGameDeleteHandler}
            >Cancel</button>
            <button
            onClick={() => deleteGameHandler(gameId)}
            >Delete</button>
        </div>
        </>
    )
}

export default DeleteGameModal
