import gamingGif from '../../images/aac_vtp_capacitor.gif'
import { NavLink } from "react-router-dom"

const GameDeveloperPage = () => {

    return (
        <>
                    <img
                    src={gamingGif}
                    alt='gamingGif'
                    />

                    <h1>Publish with us!</h1>
                    <NavLink exact to='/developer/form'>
                        Submit a new game application today!
                    </NavLink>
                    <div>

                    <NavLink exact to='/developer/portal'>
                        Your developer portal
                    </NavLink>
                    </div>
        </>
    )
}

export default GameDeveloperPage
