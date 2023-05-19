import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import './GameDeveloperForm.css'
import { useDispatch } from 'react-redux'
import { createGameThunk } from '../../store/games'

const GameDeveloperForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [developer, setDeveloper] = useState('')
    const [publisher, setPublisher] = useState('')
    const [genre, setGenre] = useState('')
    const [price, setPrice] = useState(0)
    const [releaseDate, setReleaseDate] = useState('')
    const [isPromoted, setIsPromoted] = useState(false)

    const [errors, setErrors] = useState({})

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
        }

        await dispatch(createGameThunk(formData))
        history.push('/')
    }

    // useEffect(() => {
    //     const errors = {}
    //     if (!name) errors.name = "Valid name is required"
    //     if (!description) errors.description = "Description is required"

    // }, [name, description, developer, publisher, genre, price, isPromoted])

    return (
        <>
            <div className='game-developer-form-container'>
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
                    <div className='create-game-button'>
                        <button type='submit'> Submit Game </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default GameDeveloperForm
