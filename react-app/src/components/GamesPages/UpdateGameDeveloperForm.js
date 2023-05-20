import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSingleGameThunk } from "../../store/games"

const UpdateGameDeveloperForm = () => {
    const dispatch = useDispatch()
    //eventually you're going to pass in the id of the game instead of a hardcoded value
    const singleGame = useSelector(state => state.games.singleGame)
    const hardcodedId = 3


    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [developer, setDeveloper] = useState('')
    const [publisher, setPublisher] = useState('')
    const [genre, setGenre] = useState('')
    const [price, setPrice] = useState(0)
    const [releaseDate, setReleaseDate] = useState('')
    const [isPromoted, setIsPromoted] = useState('')

    useEffect(() => {
        if (singleGame) {
            setName(singleGame.name)
            setDescription(singleGame.description)
            setDeveloper(singleGame.developer)
            setPublisher(singleGame.publisher)
            setGenre(singleGame.genre)
            setPrice(singleGame.price)
            setReleaseDate(singleGame.release_date)
            setIsPromoted(singleGame.is_promoted)
        }
    }, [singleGame])

    useEffect(() => {
        useDispatch(getSingleGameThunk(hardcodedId))
    }, [dispatch, hardcodedId])

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

export default UpdateGameDeveloperForm
