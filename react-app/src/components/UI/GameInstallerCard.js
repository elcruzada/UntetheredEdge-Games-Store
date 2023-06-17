import { useState } from "react"
import './GameInstallerCard.css'
import LoadingBar from "./Loading/LoadingBar";

const GameInstallerCard = ({ game }) => {
    const [isRemoveHover, setIsRemoveHover] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);
    };

    return (
        <div className='games-installer-card-outer-wrapper'>
            <div className='games-installer-card-left-column'
                style={{ width: '20rem' }}
            >
                <img
                    src={game && game.game_images && game.game_images[0].url}
                    style={{ height: '8rem' }}
                ></img>
                <p
                    style={{ textAlign: 'center', color: 'white', backgroundColor: 'gray', width: '7rem', borderRadius: '5px', marginTop: '1.3rem' }}
                >Base Game</p>
            </div>
            <div className='loading-bar-container'
            style={{width: '40rem', marginTop: '2rem'}}
            >

            <LoadingBar handleClick={handleClick}
                isLoading={isLoading}
            />
            </div>

            <div className='cart-games-card-right-column hover-effect'
                style={{ width: '5rem' }}
            >
                <button onClick={() => setIsLoading(true)}
                style={{padding: '.5rem', backgroundColor: 'white', cursor: 'pointer', fontWeight: 'bold'}}
                >Install</button>
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
