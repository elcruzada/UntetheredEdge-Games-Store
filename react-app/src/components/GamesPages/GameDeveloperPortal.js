import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './GameDeveloperPortal.css'
import { useEffect } from 'react'
import { getAllGamesThunk } from '../../store/games'
import DeveloperPortalGamesCard from '../UI/DeveloperPortalGamesCard'

const GameDeveloperPortal = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const sessionUserGames = useSelector(state => state.games.allGames)
    // console.log(sessionUserGames)

    useEffect(() => {
        dispatch(getAllGamesThunk())
    }, [dispatch])

    // if (!sessionUser) return null
    // if (!sessionUserGames) return null

    const convertedSessionUserGames = Object.values(sessionUserGames)

    const developerPortalGames = convertedSessionUserGames.filter(game => {
        if (game && sessionUser) {
            return game.creator_id === sessionUser.id
        }
    })
    // console.log(developerPortalGames)

    return (
        <div className='game-developer-portal-outer-wrapper'>
            <div className='game-developer-portal-inner-wrapper'>

                {
                    !sessionUser ?
                        // <div className='game-developer-portal-title'>
                        <NavLink exact to='/login'>
                            <h1
                                style={{ color: 'white' }}
                            >Create an account to see your developer portal!</h1>
                        </NavLink>
                        // </div>
                        :
                        <div className='game-developer-portal-wrapper'

                        >
                            <div className='submit-new-application-link'
                                style={{ height: '15rem' }}
                            >
                                <NavLink exact to='/developer/form'
                                    style={{ textDecoration: 'none', fontStyle: 'Calibri', fontSize: '4rem', textAlign: 'center', color: 'white', border: '1px solid white', boxShadow: '5px 5px 5px gray' }}
                                >
                                    Submit a new game application!
                                </NavLink>
                            </div>
                            {developerPortalGames && developerPortalGames.map(game => {
                                return <DeveloperPortalGamesCard game={game} />
                            })}
                        </div>
                }
            </div>
        </div>
    )
}

export default GameDeveloperPortal
