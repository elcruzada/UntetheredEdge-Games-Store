import gamingGif from '../../images/aac_vtp_capacitor.gif'
import { NavLink } from "react-router-dom"
import './GameDeveloperPage.css'

const GameDeveloperPage = () => {

    return (
        <div className='game-developer-page-outer-wrapper'>
            <div className='game-developer-page-inner-wrapper'>

            <img
                src={gamingGif}
                alt='gamingGif'
                style={{borderRadius: '5px'}}
            />

            <h1>Publish with us!</h1>
            <NavLink exact to='/developer/form'>
                Submit a new game application today!
            </NavLink>
            <div>

                <NavLink exact to='/developer/portal'>
                    Check out your games in your developer portal
                </NavLink>
            </div>
            </div>
        </div>
    )
}

export default GameDeveloperPage
