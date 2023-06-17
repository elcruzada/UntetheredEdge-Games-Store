import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './GameDeveloperPortal.css'
import { useEffect } from 'react'
import { getAllGamesThunk } from '../../store/games'
import DeveloperPortalGamesCard from '../UI/DeveloperPortalGamesCard'
import Footer from '../UI/Footer'

const GameDeveloperPortal = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const sessionUserGames = useSelector(state => state.games.allGames)

    useEffect(() => {
        dispatch(getAllGamesThunk())
    }, [dispatch])


    const convertedSessionUserGames = Object.values(sessionUserGames)

    const developerPortalGames = convertedSessionUserGames.filter(game => {
        if (game && sessionUser) {
            return game.creator_id === sessionUser.id
        }
    })

    return (
        <>
            <div className='game-developer-portal-outer-wrapper'>
                <div className='game-developer-portal-inner-wrapper'>

                    {
                        !sessionUser ?

                            <NavLink exact to='/login'>
                                <h2
                                    style={{ color: 'white', textAlign: 'center' }}
                                >Log in or create an account to see your developer portal!</h2>
                            </NavLink>

                            :
                            <div className='game-developer-portal-wrapper'

                            >
                                <div className='submit-new-application-link'
                                    style={{ height: '15rem' }}
                                >

                                    <NavLink exact to='/developer/form'
                                        style={{ textDecoration: 'none', fontStyle: 'Calibri', fontSize: '3rem', textAlign: 'center', color: 'white', border: '1px solid white', boxShadow: '5px 5px 5px gray', padding: '2rem' }}
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
            <Footer />
        </>
    )
}

export default GameDeveloperPortal
