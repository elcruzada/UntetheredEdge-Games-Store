import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import './GameDeveloperPage.css'

const GameDeveloperForm = () => {
    const history = useHistory()
    const [createGameInputs, setCreateGameInputs] = useState({
        name: '',
        description: '',
        developer: '',
        publisher: '',
        price: '',
        genre: '',
        is_promoted: ''
    })
    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setCreateGameInputs({
            ...createGameInputs,
            [e.target.id]: e.target.value
        })
    }

    const submitHandler = (e) => {

    }

    return (
        <>
            <div className='game-developer-form-container'>
                <form onSubmit={submitHandler}>
                    <h1>Publish your game with us!</h1>
                    <div className='form-row'></div>
                </form>
            </div>
        </>
    )
}

export default GameDeveloperForm
