import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import './GameDeveloperForm.css'
import { useDispatch } from 'react-redux'
import { createGameThunk } from '../../store/games'

const GameDeveloperForm = () => {
    //only after the user has craeated the Game can you add images

    const history = useHistory()
    const dispatch = useDispatch()
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [developer, setDeveloper] = useState('')
    const [publisher, setPublisher] = useState('')
    const [genre, setGenre] = useState('')
    const [price, setPrice] = useState(0)
    const [releaseDate, setReleaseDate] = useState('')
    const [isPromoted, setIsPromoted] = useState(false)
    // const [imageURLs, setImageURLs] = useState([])
    // const [newURL, setNewURL] = useState('')

    const [errors, setErrors] = useState({})

    useEffect(() => {
        const errors = {}

        if (!name) errors.name = "Title for your game is required"
        if (!description) errors.description = "Game description required"
        if (!developer) errors.developer = "Developer info required"
        if (!publisher) errors.publisher = "Publisher info required"
        if (!price) errors.price = "Price for your game is required"
        if (!genre) errors.genre = "Genre is required"
        if (!releaseDate) errors.releaseDate = "Release date is required"

        setErrors(errors)
    }, [name, description, developer, publisher, genre, releaseDate])

    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData()

        if (!Object.values(errors).length) {
            formData.append('name', name)
            formData.append('description', description)
            formData.append('release_date', releaseDate)
            formData.append('developer', developer)
            formData.append('publisher', publisher)
            formData.append('genre', genre)
            formData.append('price', price)
            formData.append('is_promoted', isPromoted)
            // imageURLs.forEach((url) => {
            //     formData.append('images', url)
            // })
            const res = await dispatch(createGameThunk(formData))
            history.push('/developer/portal')
        }

    }

    // const addImageHandler = async () => {
    //     if (newURL.trim() !== '') {
    //         const res = await fetch('/api/games/images', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //             body: JSON.stringify({game_id: id, url: newURL})
    //         })

    //         if (res.ok) {
    //             const newGameImage = await res.json()
    //             setImageURLs([...imageURLs, newURL])
    //             setNewURL('')
    //         }
    //     }
    // }

    // const removeImageHandler = (i) => {
    //     const updatedURLs = [...imageURLs]
    //     updatedURLs.splice(i, 1)
    //     setImageURLs(updatedURLs)
    // }

    // useEffect(() => {
    //     const errors = {}
    //     if (!name) errors.name = "Valid name is required"
    //     if (!description) errors.description = "Description is required"

    // }, [name, description, developer, publisher, genre, price, isPromoted])

    // useEffect(() => {
    //     console.log(imageURLs)
    // },[imageURLs])

    return (
        <>
            <div className='game-developer-form-container'>
                <div className='game-developer-errors' style={{color: 'black', padding: '3rem'}}>

                <ul>
                    {errors.name && <li>{errors.name}</li>}
                    {errors.description && <li>{errors.description}</li>}
                    {errors.developer && <li>{errors.developer}</li>}
                    {errors.publisher && <li>{errors.publisher}</li>}
                    {errors.price && <li>{errors.price}</li>}
                    {errors.genre && <li>{errors.genre}</li>}
                    {errors.releaseDate && <li>{errors.releaseDate}</li>}

                </ul>
                </div>
                <form onSubmit={submitHandler}>
                    <h1>Publish your game with us!</h1>
                    <div className='form-row'>
                        <label>Your game name</label>
                        <input
                            id='gameName'
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Enter your game name here'
                        >
                        </input>
                    </div>
                    {/* {errors.name && <p>{errors.name}</p>} */}
                    <div className='form-row'>
                        <label>Your developer name</label>
                        <input
                            id='gameName'
                            type='text'
                            value={developer}
                            onChange={(e) => setDeveloper(e.target.value)}
                            placeholder='Enter your developer name here'
                        >
                        </input>
                    </div>
                    <div className='form-row'>
                        <label>Your publisher</label>
                        <input
                            id='gamePublisher'
                            type='text'
                            value={publisher}
                            onChange={(e) => setPublisher(e.target.value)}
                            placeholder='UntetheredEdge Interactive unless otherwise noted'
                        >
                        </input>
                    </div>
                    <div className='form-row'>
                        <label>Your publisher</label>
                        <input
                            id='gameGenre'
                            type='text'
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                            placeholder='i.e. Shooter, RPG, Puzzle, Platformer...'
                        >
                        </input>
                    </div>
                    <div className='form-row'>
                        <label>Price of your game</label>
                        <input
                            id='gamePrice'
                            type='number'
                            step='.01'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        >
                        </input>
                    </div>
                    <div className='form-row'>
                        <label>Write up a snazzy description for your game</label>
                        <textarea
                            id='gameDescription'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder='Enter a description here'
                        >
                        </textarea>
                    </div>
                    <input
                        id="gameReleaseDate"
                        type="date"
                        value={releaseDate}
                        onChange={(e) => setReleaseDate(e.target.value)}
                    />
                    <div className='form-row'>
                        <label>Want your game promoted?</label>
                        <input
                            id='gamePromotion'
                            type='checkbox'
                            checked={isPromoted}
                            onChange={() => setIsPromoted(!isPromoted)}
                        >
                        </input>
                    </div>
                    {/* <label>Update Images</label>
                    {imageURLs.map((imageURL, index) => {
                        <div
                            key={index}
                            className='image-container'
                        >
                            <input
                                type='text'
                                value={imageURL}
                                disabled
                            >Your images</input>
                            <button
                                onClick={() => removeImageHandler(index)}
                            >
                                Remove
                            </button>
                        </div>
                    })}
                    <input
                        type='text'
                        placeholder='Enter your image URL here'
                        value={newURL}
                        onChange={(e) => setNewURL(e.target.value)}
                    />
                    <button
                        onClick={addImageHandler}
                    >
                        Add Image
                    </button> */}
                    <div className='create-game-button'>
                        <button type='submit'> Submit Game </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default GameDeveloperForm
