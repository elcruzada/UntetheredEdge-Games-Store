import { useDispatch, useSelector } from 'react-redux'
import './GameDeveloperPage.css'
import { useEffect } from 'react'
import { getAllGamesThunk } from '../../store/games'

const GameDeveloperPortal = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const sessionUserGames = useSelector(state => state.games.allGames)
    console.log(sessionUserGames)

    useEffect(() => {
        dispatch(getAllGamesThunk())
    }, [dispatch])

    if (!sessionUser) return null
    if (!sessionUserGames) return null


    return (
        <>

        </>
    )
}

export default GameDeveloperPortal
