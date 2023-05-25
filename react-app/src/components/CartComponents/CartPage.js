import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './CartPage.css'
import CartGamesCard from '../UI/CartGamesCard'

const CartPage = () => {
    const cart = useSelector(state => state.cart.cart.user_cart)
    console.log('CAAART', cart)
    // if (!cart) return null

    return (


            <div className='cart-page-outer-wrapper'>
                <div className='cart-page-inner-wrapper'>


                    <div className='cart-page-checkout'>
                        <h1>Games Summary</h1>
                        <p>Price</p>
                        <p>Total</p>
                        <button>Checkout</button>
                    </div>
                    <div className='cart-page-games-card-container'>
                        {cart === undefined ?
                            <NavLink exact to='/'
                            style={{textDecoration: 'none', fontSize: '3rem', border: '1px solid white', color: 'white', boxShadow: '5px 5px 5px gray'}}
                            >
                                Your cart is empty. Add games to your cart!
                            </NavLink>
                            :
                            cart.map(game => {
                                return <CartGamesCard
                                    key={game.id}
                                    game={game} />
                            })}
                    </div>
                </div>
            </div>

    )
}

export default CartPage
