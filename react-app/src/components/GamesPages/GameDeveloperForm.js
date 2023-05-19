import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import './GameDeveloperForm.css'

const GameDeveloperForm = () => {
    const history = useHistory()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [developer, setDeveloper] = useState('')
    const [publisher, setPublisher] = useState('')
    const [price, setPrice] = useState(0)
    const [isPromoted, setIsPromoted] = useState(false)

    const [errors, setErrors] = useState({})

    const submitHandler = async (e) => {
        e.preventDefault()
        if (!Object.values(errors).length) {
            const newGameData = new FormData()
            newGameData.append('name', name)
            newGameData.append('description', description)
            // newGameData.append()
            // newGameData.append()
        }
    }

    useEffect(() => {

    })

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
                            id='gamePrice'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder='Enter a description here'
                        >
                        </textarea>
                    </div>
                    <div className='form-row'>
                        <label>Want your game promoted?</label>
                        <input
                            id='gamePromotion'
                            type='checkbox'
                            value={isPromoted}
                            onChange={(e) => setIsPromoted(e.target.value)}
                        >
                        </input>
                    </div>
                </form>
            </div>
        </>
    )
}

export default GameDeveloperForm
