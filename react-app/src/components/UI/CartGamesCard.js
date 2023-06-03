import './CartGamesCard.css'

const CartGamesCard = ({game, removeFromCartHandler}) => {


    return (
        <div className='cart-games-card-outer-wrapper'>
            <div className='cart-games-card-left-column'>
            <img
            src={game && game.game_images && game.game_images[0].url
                // === undefined

                // ? 'https://www.drupal.org/files/project-images/broken-image.jpg' : game.game_images[0].url
            }
            style={{height: '8rem'}}
            ></img>
            <p
            style={{textAlign: 'center', color: 'white', backgroundColor: 'gray', width: '7rem', borderRadius: '5px'}}
            >Base Game</p>
            </div>
            <div className='cart-games-card-right-column'>
                <p
                style={{color: 'white'}}
                >Price: ${game.price}</p>
                <p
                style={{color: 'gray', cursor: 'pointer', width: '4rem'}}
                onClick={() => removeFromCartHandler(game.id)}
                >Remove</p>
            </div>
        </div>
    )
}

export default CartGamesCard
