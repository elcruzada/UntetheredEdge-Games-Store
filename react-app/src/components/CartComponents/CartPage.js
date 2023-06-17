import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import './CartPage.css'
import UELogo from '../../images/UE_logo.png'
import CartGamesCard from '../UI/CartGamesCard'
import { useState, useEffect } from 'react'
import { deleteUserCartThunk, getUserCartThunk } from '../../store/cart'
import LowerNavBar from '../LowerNavBar/LowerNavBar'
import LoadingScreen from '../UI/Loading/LoadingScreen'
import OpenModalButton from '../OpenModalButton'
import CheckoutModal from './CheckoutModal'

const CartPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const cartFetch = useSelector(state => state.cart.cart)
    const cart = Object.values(cartFetch)

    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true);

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
    }, [cart])

    useEffect(() => {
        dispatch(getUserCartThunk()).then(() => {
            setLoading(false);
        })
    }, [dispatch])

    const cartCheckoutHandler = async () => {
        if (cart.length === 0) {
            window.alert('Cart must not be empty')
            return
        }

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

        history.push('/profile')
    }

    return (
        <>
            {
                loading ? <LoadingScreen /> :
                    <div className='cart-page-outer-wrapper'>
                        <div className='cart-page-inner-wrapper'>

                            <LowerNavBar />
                            <h1 style={{ color: 'white', marginTop: '3rem', marginBottom: '3rem' }}
                            >My Cart</h1>
                            <div className='cart-page-games-checkout-game-card-container'>


                                <div className='cart-page-games-card-container'>
                                    {cart.length === 0 ?
                                        <>
                                            {/* <img src='../../images/UE_logo.png'></img> */}
                                            <NavLink exact to='/games/browse'
                                                style={{ textDecoration: 'none', fontSize: '2rem', border: '1px solid white', color: 'white', boxShadow: '5px 5px 5px gray', padding: '1rem' }}
                                            >
                                                Your cart is empty. Add games to your cart!
                                            </NavLink>
                                        </>
                                        :
                                        cart.map(game => {
                                            return <CartGamesCard
                                                key={game.id}
                                                game={game}
                                                removeFromCartHandler={removeFromCartHandler}
                                            />
                                        })}
                                </div>
                                <div className='cart-page-checkout'>
                                    <h1 style={{ color: 'white' }}>Games Summary</h1>
                                    <div
                                        style={{ width: '10rem', display: 'flex', justifyContent: 'space-between', color: 'white', fontSize: '.9rem' }}
                                    >

                                        <p style={{ fontWeight: 'bold' }}>Total: </p>
                                        <p style={{ fontWeight: 'bold', color: '#C69749' }}>${total} </p>
                                    </div>
                                    <OpenModalButton
                                    buttonText="CHECK OUT"
                                    modalComponent={<CheckoutModal
                                    cart={cart}

                                    />}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>


    )
}

export default CartPage
