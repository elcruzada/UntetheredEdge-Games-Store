import { useSelector } from 'react-redux'
import './CartPage.css'
import CartGamesCard from '../UI/CartGamesCard'

const CartPage = () => {
    const cart = useSelector(state => state.cart.cart.user_cart)
    console.log('CAAART', cart)
    if (!cart) return null

    return (
        <>
        <div className='cart-page-outer-wrapper'>

        <div className='cart-page-checkout'>
            <h1>Games Summary</h1>
            <p>Price</p>
            <p>Total</p>
            <button>Checkout</button>
        </div>
        <div className='cart-page-games-card-container'>
        {cart.map(game => {
            return <CartGamesCard
            key={game.id}
            game={game}/>
        })}
        </div>
        </div>
        </>
    )
}

export default CartPage
