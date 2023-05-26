import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import './CartPage.css'
import CartGamesCard from '../UI/CartGamesCard'
import { useState, useEffect } from 'react'
import { deleteUserCartThunk, getUserCartThunk } from '../../store/cart'

const CartPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    // const cart = useSelector(state => state.cart.cart.user_cart)
    const cartFetch = useSelector(state => state.cart.cart)
    const cart = Object.values(cartFetch)
    // console.log(newCart)
    // let cart = []
    // console.log('CAART', cart)
    // const cartCopy = {...cart}
    const [total, setTotal] = useState(0)
    // console.log('CAAART', cart)
    // const totalCost = cart.forEach(game => {
        //     total += game.price
        // })
    const removeFromCartHandler = async (gameId) => {
        await dispatch(deleteUserCartThunk(gameId))
        await dispatch(getUserCartThunk())
        history.push('/cart')
    }

        useEffect(() => {
            let newTotal = 0
            if (cart) {
                cart.forEach(game => {
                    newTotal += game.price
                })
            }
            setTotal(newTotal)
        },[cart])

        useEffect(() => {
            dispatch(getUserCartThunk())
        },[dispatch])

        const cartCheckoutHandler = async () => {
            try {
                const res = await fetch(`/api/cart/order`, {
                    method: 'POST'
                })
                if (res.ok) {
                    const newCart = await res.json()
                }
            } catch (error) {
                console.error('Cart error', error)
            }

            // setTimeout(() => {

            //     history.push('/profile');

            // }, 2000)
            // history.push('/games')
            history.push('/profile')
        }

        // const cartCheckoutHandler = () => {
        //     window.alert("Feature coming soon!")
        // }
        // if (!cart) return null
    return (


            <div className='cart-page-outer-wrapper'>
                <div className='cart-page-inner-wrapper'>


                    <div className='cart-page-checkout'>
                        <h1>Games Summary</h1>
                        <p>Total {total} </p>
                        <button
                        onClick={cartCheckoutHandler}
                        >Checkout</button>
                    </div>
                    <div className='cart-page-games-card-container'>
                        {cart.length === 0 ?
                            <NavLink exact to='/'
                            style={{textDecoration: 'none', fontSize: '3rem', border: '1px solid white', color: 'white', boxShadow: '5px 5px 5px gray'}}
                            >
                                Your cart is empty. Add games to your cart!
                            </NavLink>
                            :
                            cart.map(game => {
                                return <CartGamesCard
                                    key={game.id}
                                    game={game}
                                    removeFromCartHandler={removeFromCartHandler}
                                    />
                            })}
                    </div>
                </div>
            </div>

    )
}

export default CartPage
