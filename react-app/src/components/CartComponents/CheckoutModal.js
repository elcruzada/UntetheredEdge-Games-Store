import { useHistory } from "react-router-dom"
import { useModal } from "../../context/Modal"
import { useEffect, useState } from "react"

const CheckoutModal = ({ cart }) => {
    // const cartFetch = useSelector(state => state.cart.cart)
    // const cart = Object.values(cartFetch)
    const history = useHistory()

    const [cardNumber, setCardNumber] = useState('')
    const [expiration, setExpiration] = useState('')
    const [cvv, setCvv] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [errors, setErrors] = useState({})
    const { closeModal } = useModal()

    const cartCheckoutHandler = async () => {
        if (cart && cart.length === 0) {
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
        closeModal()
    }


    useEffect(() => {
        const errors = {}

        if (!cardNumber) errors.cardNumber = "Invalid card number"
        if (!expiration) errors.expiration = "Invalid expiration"
        if (!cvv) errors.cvv = "Invalid CVV"
        if (!zipCode) errors.zipCode = "Invalid ZIP code"
        if (!state) errors.state = "Invalid State"
        if (!city) errors.city = "Invalid City"

        setErrors(errors)
    }, [cardNumber, expiration, cvv, zipCode, state, city])

    return (
        <>
            <div className='checkout-modal-wrapper'>
                <div className='checkout-modal-wrapper-left-column'>
                    <div className='checkout-modal-credit-card-wrapper'>
                        <div className='card-details-credit-card-details-image-wrapper'>
                            <p>Card Details</p>
                            <img alt='credit-card-image'>
                            </img>
                        </div>
                        <form >
                            <input
                                id='card-number'
                                type='text'
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                placeholder='Card Number'
                                />
                            <div className='expiration-cvv-container'>
                                <input
                                    id='expiration'
                                    type='text'
                                    value={expiration}
                                    onChange={(e) => setExpiration(e.target.value)}
                                    placeholder='Expiration'
                                    />
                                <input
                                    id='cvv'
                                    type='text'
                                    onChange={(e) => setCvv(e.target.value)}
                                    value={cvv}
                                    placeholder='CVV'
                                    />
                            </div>
                            <div className='zip-code-state-city-container'>
                                <input
                                    id='zipCode'
                                    type='text'
                                    value={zipCode}
                                    onChange={(e) => setZipCode(e.target.value)}
                                    placeholder='ZIP code'
                                    />
                                <input
                                    id='state'
                                    type='text'
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    placeholder='State'
                                    />
                                <input
                                    id='city'
                                    type='text'
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder='City'
                                />
                            </div>
                        </form>
                    </div>
                    <p>By choosing to save your payment information, this payment method will be selected as the default for all purchases made using UntetheredEdge Games payment, including purchases in the UntetheredEdge Games Store.</p>
                </div>
                <div className='checkout-modal-wrapper-right-column'>
                    {cart && cart.length > 0 && cart.map(game =>
                        <img src={game && game.game_images && game.game_images[0].url}
                            style={{ height: '3rem' }}
                        />)}
                    <button onClick={cartCheckoutHandler}>Place Order</button>
                </div>
            </div>
        </>
    )
}

export default CheckoutModal
