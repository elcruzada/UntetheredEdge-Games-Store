import { useState, useEffect } from 'react'
import './NewsArticleForm.css'
import { useHistory, NavLink } from 'react-router-dom/'
import { useDispatch, useSelector } from 'react-redux'
import { getAllNewsThunk, getSingleNewsThunk, updateNewsThunk } from '../../store/news'
import { useParams } from 'react-router-dom'

const ArticleUpdateForm = () => {
    const { newsId } = useParams()
    const sessionUser = useSelector(state => state.session.user)
    const singleArticle = useSelector(state => state.news.singleNews)

    const history = useHistory()
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [previewImage, setPreviewImage] = useState('')
    const [content, setContent] = useState('')

    const [errors, setErrors] = useState({})

    useEffect(() => {
        dispatch(getSingleNewsThunk(newsId))
    }, [dispatch])

    useEffect(() => {
        if (singleArticle) {
            setTitle(singleArticle.title)
            setDescription(singleArticle.description)
            setPreviewImage(singleArticle.preview_image)
            setContent(singleArticle.content)
        }
    }, [])

    useEffect(() => {
        const errors = {}

        if (!title) errors.title = "Title for your game is required"
        if (!description) errors.description = "Game description required"
        if (!content) errors.content = "Publisher info required"

        setErrors(errors)
    }, [title, description, previewImage, content])

    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData()

        if (!Object.values(errors).length) {
            formData.append('title', title)
            formData.append('description', description)
            formData.append('content', content)

            await dispatch(updateNewsThunk(formData))
            history.push('/news')
        }

    }


    return (
        <>
            <div className='game-developer-form-container'>
                {!sessionUser ?
                    <NavLink exact to='/login'><h1>Sign in to Create an Article</h1></NavLink>
                    :
                    <form onSubmit={submitHandler}>
                        <h1>Enter the following fields to publish your article</h1>
                        <div className='form-row'>
                            <label>Your article's title</label>
                            <input
                                id='title'
                                type='text'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder='Enter your title here'
                            >
                            </input>
                            {errors.title && <p>{errors.title}</p>}
                        </div>
                        <div className='form-row'>
                            <label>Your article's description</label>
                            <input
                                id='description'
                                type='text'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder='Enter your description here'
                            >
                            </input>
                            {errors.title && <p>{errors.description}</p>}
                        </div>
                        <div className='form-row'
                        >
                            <label>Your article's content</label>
                            <textarea
                                style={{ height: '25rem' }}
                                id='gamePublisher'
                                type='text'
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder='Enter the content of your article here'
                            />

                            {errors.content && <p>{errors.content}</p>}
                        </div>
                        <div className='create-game-button'>
                            <button type='submit'> Submit Article </button>
                        </div>
                    </form>
                }
            </div>
        </>
    )
}

export default ArticleUpdateForm
