import './DeleteArticleModal.css'
import { useDispatch } from 'react-redux'
import { useModal } from '../../context/Modal'
import { useHistory } from 'react-router-dom'
import { deleteNewsThunk, getAllNewsThunk } from '../../store/news'

const DeleteArticleModal = ({newsId}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { closeModal } = useModal()

    const cancelDeleteHandler = () => {
        closeModal()
    }

    const deleteNewsHandler = (newsId) => {
        dispatch(deleteNewsThunk(newsId))
        closeModal()
        dispatch(getAllNewsThunk())
        history.push('/news')
    }

    return (
        <>
        <div className='modal'>
            <h1>Are you sure you want to delete this article?</h1>
            <h2>This action cannot be reversed.</h2>

            <button
            onClick={cancelDeleteHandler}
            >Cancel</button>
            <button
            onClick={() => deleteNewsHandler(newsId)}
            >Delete</button>
        </div>
        </>
    )
}

export default DeleteArticleModal
