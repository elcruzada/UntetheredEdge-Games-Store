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
                style={{borderRadius: '5px', height: '25rem'}}
            />

            <h1>Publish with us!</h1>
            <NavLink exact to='/developer/form'
            style={{textDecoration: 'none', fontStyle: 'Calibri', fontSize: '4rem', textAlign: 'center', color: 'white', border: '1px solid white', boxShadow: '5px 5px 5px gray', marginBottom: '4rem'}}
            >
                Submit a new game application today!
            </NavLink>
            {/* <div> */}
                <p style={{color:'white', textAlign: 'center', fontSize: '18px'}}>Already a partner?</p>
                <NavLink exact to='/developer/portal'
                style={{textDecoration: 'none', fontStyle: 'Calibri', fontSize: '4rem', textAlign: 'center', color: 'white', border: '1px solid white', boxShadow: '5px 5px 5px gray', marginBottom: '2rem'}}
                >
                    Check out games in your developer portal
                </NavLink>
            {/* </div> */}
            </div>
        </div>
    )
}

export default GameDeveloperPage
