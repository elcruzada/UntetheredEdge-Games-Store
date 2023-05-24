import gamingGif from '../../images/aac_vtp_capacitor.gif'
import { NavLink } from "react-router-dom"
import './GameDeveloperPage.css'
import { useSelector } from 'react-redux'

const GameDeveloperPage = () => {
    const sessionUser = useSelector(state => state.session.user)

    return (
        <div className='game-developer-page-outer-wrapper'>
            <div className='game-developer-page-inner-wrapper'>

                <img
                    src={gamingGif}
                    alt='gamingGif'
                    style={{ borderRadius: '5px', height: '25rem' }}
                />

                <h1>Publish with us!</h1>
                {
                    sessionUser ?
                        <NavLink exact to='/developer/form'
                            style={{ textDecoration: 'none', fontStyle: 'Calibri', fontSize: '4rem', textAlign: 'center', color: 'white', border: '1px solid white', boxShadow: '5px 5px 5px gray', marginBottom: '4rem' }}
                        >
                            Submit a new game application today!

                        </NavLink>
                        :
                        <NavLink exact to='/login'
                            style={{ textDecoration: 'none', fontStyle: 'Calibri', fontSize: '4rem', textAlign: 'center', color: 'white', border: '1px solid white', boxShadow: '5px 5px 5px gray', marginBottom: '4rem' }}
                        >
                            Log in to submit a new game application!
                        </NavLink>
                }

                <p style={{ color: 'white', textAlign: 'center', fontSize: '18px' }}>Already a partner?</p>
                {sessionUser ?
                    <NavLink exact to='/developer/portal'
                        style={{ textDecoration: 'none', fontStyle: 'Calibri', fontSize: '4rem', textAlign: 'center', color: 'white', border: '1px solid white', boxShadow: '5px 5px 5px gray', marginBottom: '2rem' }}
                    >
                        Check out games in your developer portal
                    </NavLink>
                    :
                    <NavLink exact to='/login'
                        style={{ textDecoration: 'none', fontStyle: 'Calibri', fontSize: '4rem', textAlign: 'center', color: 'white', border: '1px solid white', boxShadow: '5px 5px 5px gray', marginBottom: '2rem' }}
                    >
                        Log in to see games in your portal
                    </NavLink>
                }

            </div>
        </div>
    )
}

export default GameDeveloperPage
