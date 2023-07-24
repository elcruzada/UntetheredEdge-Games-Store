import { useState } from 'react'
import './CartGamesCard.css'

const CartGamesCard = ({game, removeFromCartHandler}) => {
    const [isRemoveHover, setIsRemoveHover] = useState(false)

    return (
        <div className='cart-games-card-outer-wrapper'>
            <div className='cart-games-card-left-column'>
            <img
            src={game && game.game_images && game.game_images[0].url
            }
            style={{height: '8rem'}}
            ></img>
            <p
            style={{textAlign: 'center', color: 'white', backgroundColor: 'gray', width: '7rem', borderRadius: '5px'}}
            >Base Game</p>
            </div>
            {/* <img src='https://i.etsystatic.com/16213822/r/il/408855/1656610858/il_570xN.1656610858_oldj.jpg'
            style={{width: '22rem', padding: '1rem'}}
            alt='funny-yeet' /> */}
            <div className='cart-games-card-right-column hover-effect'>
                <p
                style={{color: 'white'}}
                >Price: ${game.price}</p>
                <p
                style={{color: isRemoveHover ? 'white' : 'gray', cursor: 'pointer', width: '4rem'}}
                onClick={() => removeFromCartHandler(game.id)}
                onMouseEnter={() => setIsRemoveHover(true)}
                onMouseLeave={() => setIsRemoveHover(false)}
                >Remove</p>
            </div>
        </div>
    )
}

export default CartGamesCard
