import { useState, useEffect } from 'react'
import './NewsArticleForm.css'
import { useHistory, NavLink } from 'react-router-dom/'
import { useDispatch, useSelector } from 'react-redux'
import { createNewsThunk } from '../../store/news'

const NewsArticleForm = () => {
    const sessionUser = useSelector(state => state.session.user)

    const history = useHistory()
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [previewImage, setPreviewImage] = useState('')
    const [content, setContent] = useState('')

    const [errors, setErrors] = useState({})

    useEffect(() => {
        const errors = {}

        if (!title) errors.title = "Title for your game is required"
        if (!description) errors.description = "Game description required"
        if (!previewImage) errors.previewImage = "Preview Image required"
        if (!content) errors.content = "Publisher info required"

        setErrors(errors)
    }, [title, description, previewImage, content])

    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData()

        if (!Object.values(errors).length) {
            formData.append('title', title)
            formData.append('description', description)
            formData.append('preview_image', previewImage)
            formData.append('content', content)

            await dispatch(createNewsThunk(formData))
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

                        <div className='form-row'>
                            <label>Your article's preview image url here</label>
                            <input
                                id='previewImage'
                                type='text'
                                value={previewImage}
                                onChange={(e) => setPreviewImage(e.target.value)}
                                placeholder='Enter your preview image here'
                            >
                            </input>
                            {errors.description && <p>{errors.previewImage}</p>}
                        </div>
                        <div className='form-row'>
                            <label>Your article's content</label>
                            <textarea
                                id='gamePublisher'
                                type='text'
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder='Enter the content of your article here'
                            />

                            {errors.content && <p>{errors.content}</p>}
                        </div>
                        <div className='create-game-button'>
                            <button type='submit'> Submit Game </button>
                        </div>
                    </form>
                }
            </div>
        </>
    )
}

export default NewsArticleForm
