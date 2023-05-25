import './CartGamesCard.css'

const CartGamesCard = ({game}) => {


    return (
        <div className='cart-games-card-outer-wrapper'>
            <div className='cart-games-card-left-column'>
            <img
            src={game.game_images[0].url}
            style={{height: '8rem'}}
            ></img>
            </div>
            <div className='cart-games-card-right-column'>
                <p>Price</p>
                <p>Remove</p>
            </div>
        </div>
    )
}

export default CartGamesCard
