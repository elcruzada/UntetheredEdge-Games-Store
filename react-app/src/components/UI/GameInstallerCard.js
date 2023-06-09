import { useState } from "react"
import './GameInstallerCard.css'

const GameInstallerCard = ({ game }) => {
    const [isRemoveHover, setIsRemoveHover] = useState(false)
    //put the loading logic here

    return (
        <div className='games-installer-card-outer-wrapper'>
            <div className='games-installer-card-left-column'
            style={{width: '20rem'}}
            >
                <img
                    src={game && game.game_images && game.game_images[0].url}
                    style={{ height: '8rem' }}
                ></img>
                <p
                    style={{ textAlign: 'center', color: 'white', backgroundColor: 'gray', width: '7rem', borderRadius: '5px' }}
                >Base Game</p>
            </div>
            <div className='cart-games-card-right-column hover-effect'
            style={{width: '5rem'}}
            >
                <p
                    style={{ color: isRemoveHover ? 'white' : 'gray', cursor: 'pointer', width: '4rem' }}
                    onMouseEnter={() => setIsRemoveHover(true)}
                    onMouseLeave={() => setIsRemoveHover(false)}
                    onClick={() => window.alert("Can't YEEEEEEEEEEET in my store")}
                >Uninstall</p>
            </div>
        </div>
    )

}

export default GameInstallerCard
