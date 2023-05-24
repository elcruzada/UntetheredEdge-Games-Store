import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSingleGameThunk, updateGameThunk } from "../../store/games"
import { useModal } from "../../context/Modal"
import { useHistory } from "react-router-dom"
import './UpdateGameDeveloperForm.css'

const UpdateGameDeveloperForm = ({ gameId }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    //eventually you're going to pass in the id of the game instead of a hardcoded value
    const singleGame = useSelector(state => state.games.singleGame)
    console.log('SSSINGLE', singleGame)
    const { closeModal } = useModal()
    // const hardcodedId = 3

    // <OpenModalButton
    //           buttonText="Log In"
    //           onItemClick={closeMenu}
    //           modalComponent={<LoginFormModal />}
    //         />

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [developer, setDeveloper] = useState('')
    const [publisher, setPublisher] = useState('')
    const [genre, setGenre] = useState('')
    const [price, setPrice] = useState(0)
    const [releaseDate, setReleaseDate] = useState('')
    const [isPromoted, setIsPromoted] = useState('')
    const [errors, setErrors] = useState({})

    useEffect(() => {
        const errors = {}

        if (!name) errors.name = "Title for your game is required"
        if (!description) errors.description = "Game description required"
        if (!developer) errors.developer = "Developer info required"
        if (!publisher) errors.publisher = "Publisher info required"
        if (!price) errors.price = "Price for your game is required"
        if (!genre) errors.genre = "Genre is required"

        setErrors(errors)
    }, [name, description, developer, price, publisher, genre])


    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData()

        if (Object.values(errors).length) {
            const errors = {}

            if (!name) errors.name = "Title for your game is required"
            if (!description) errors.description = "Game description required"
            if (!developer) errors.developer = "Developer info required"
            if (!publisher) errors.publisher = "Publisher info required"
            if (!price) errors.price = "Price for your game is required"
            if (!genre) errors.genre = "Genre is required"

            setErrors(errors)
        } else {
            formData.append('name', name)
            formData.append('description', description)
            // formData.append('release_date', releaseDate)
            formData.append('developer', developer)
            formData.append('publisher', publisher)
            formData.append('genre', genre)
            formData.append('price', price)
            formData.append('is_promoted', isPromoted)

            closeModal()
            await dispatch(updateGameThunk(gameId, formData))
            if (singleGame.game_images.length > 0) {
                history.push(`/games/${gameId}`)
            } else {
                history.push(`/developer/portal`)
            }
        }

    }

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
        dispatch(getSingleGameThunk(gameId))
    }, [dispatch, gameId])

    return (

        <div className='game-developer-form-container2'>
            <form onSubmit={submitHandler}>
                <h1>Publish your game with us!</h1>
                    {errors.name && <p>{errors.name}</p>}
                    {errors.developer && <p>{errors.developer}</p>}
                    {errors.publisher && <p>{errors.publisher}</p>}
                    {errors.genre && <p>{errors.genre}</p>}
                    {errors.description && <p>{errors.description}</p>}
                <div className='form-row2'>
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
                <div className='form-row2'>
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
                <div className='form-row2'>
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
                <div className='form-row2'>
                    <label>Your genre</label>
                    <input
                        id='gameGenre'
                        type='text'
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        placeholder='i.e. Shooter, RPG, Puzzle, Platformer...'
                    >
                    </input>

                </div>
                <div className='form-row2'>
                    <label>Price of your game</label>
                    <input
                        id='gamePrice'
                        type='number'
                        step='.01'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    >
                    </input>
                    {errors.name && <p>{errors.price}</p>}
                </div>
                <div className='form-row2'>
                    <label>Write up a snazzy description for your game</label>
                    <textarea
                        id='gameDescription'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Enter a description here'
                    >
                    </textarea>

                </div>
                {/* <input
                        id="gameReleaseDate"
                        type="date"
                        value={releaseDate}
                        onChange={(e) => setReleaseDate(e.target.value)}
                    /> */}
                <div className='form-row2'>
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
    )
}

export default UpdateGameDeveloperForm
