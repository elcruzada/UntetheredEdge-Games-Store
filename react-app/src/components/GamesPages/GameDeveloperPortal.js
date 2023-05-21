import { useDispatch, useSelector } from 'react-redux'
import './GameDeveloperPage.css'
import { useEffect } from 'react'
import { getAllGamesThunk } from '../../store/games'
import DeveloperPortalGamesCard from '../UI/DeveloperPortalGamesCard'

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

    const convertedSessionUserGames = Object.values(sessionUserGames)

    const developerPortalGames = convertedSessionUserGames.filter(game => game.creator_id === sessionUser.id)
    console.log(developerPortalGames)

    return (
        <>
        <div className='game-developer-portal-wrapper'>
            {developerPortalGames && developerPortalGames.map(game => {
               return <DeveloperPortalGamesCard game={game}/>
            })}
        </div>
        </>
    )
}

export default GameDeveloperPortal
