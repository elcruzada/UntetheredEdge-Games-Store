import { useHistory } from "react-router-dom"
import { useModal } from "../../context/Modal"
import { useEffect, useState } from "react"

const CheckoutModal = ({ cart }) => {
    const history = useHistory()

    const [cardNumber, setCardNumber] = useState('')
    const [expiration, setExpiration] = useState('')
    const [cvv, setCvv] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [errors, setErrors] = useState({})
    const [hover, setHover ] = useState(false)
    const { closeModal } = useModal()

    const cartCheckoutHandler = async () => {
        if (cart && cart.length === 0) {
            window.alert('Cart must not be empty')
            return
        }

        if (Object.values(errors).length > 0) {
            window.alert('Please fill out the information')
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
                <div className='checkout-modal-wrapper-left-column'
                    style={{ width: '40rem' }}
                >
                    <div className='checkout-modal-credit-card-wrapper'>
                        <div className='card-details-credit-card-details-image-wrapper'

                        >
                            <p style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '1.5rem' }}>Card Details</p>
                            <img alt='credit-card-image' src='https://user-images.githubusercontent.com/52581/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png' style={{ height: '3rem' }} />
                        </div>
                        <form>
                            <input
                                id='card-number'
                                type='text'
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                placeholder='Card Number'
                                style={{ marginBottom: '10px', padding: '10px' }}
                            />
                            {errors.cardNumber && <p>{errors.cardNumber}</p>}
                            <div className='expiration-cvv-container'>
                                <div>
                                    <input
                                        id='expiration'
                                        type='text'
                                        value={expiration}
                                        onChange={(e) => setExpiration(e.target.value)}
                                        placeholder='Expiration'

                                    />
                                    {errors.expiration && <p>{errors.expiration}</p>}
                                </div>
                                <div>
                                    <input
                                        id='cvv'
                                        type='text'
                                        onChange={(e) => setCvv(e.target.value)}
                                        value={cvv}
                                        placeholder='CVV'
                                        style={{ width: 'calc(50% - 5px)', marginBottom: '10px', padding: '10px' }}
                                    />
                                    {errors.cvv && <p>{errors.cvv}</p>}
                                </div>
                            </div>
                            <div className='zip-code-state-city-container'
                            >
                                <div>

                                    <input
                                        id='zipCode'
                                        type='text'
                                        value={zipCode}
                                        onChange={(e) => setZipCode(e.target.value)}
                                        placeholder='ZIP code'
                                        style={{ marginBottom: '10px', padding: '10px' }}
                                    />
                                    {errors.zipCode && <p>{errors.zipCode}</p>}
                                </div>
                                <div>
                                    <input
                                        id='state'
                                        type='text'
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        placeholder='State'
                                        style={{ marginBottom: '10px', padding: '10px' }}
                                    />
                                    {errors.state && <p>{errors.state}</p>}
                                </div>
                                <div>
                                    <input
                                        id='city'
                                        type='text'
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        placeholder='City'
                                        style={{ marginBottom: '10px', padding: '10px' }}
                                    />
                                    {errors.city && <p>{errors.city}</p>}
                                </div>
                            </div>
                        </form>
                    </div>
                    <p
                        className='payment-information'
                        style={{ fontSize: '10px', color: 'gray', marginTop: '1rem' }}
                    >By choosing to save your payment information, this payment method will be selected as the default for all purchases made using UntetheredEdge Games payment, including purchases in the UntetheredEdge Games Store.</p>
                </div>
                <div className='checkout-modal-wrapper-right-column'
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    {cart && cart.length > 0 && cart.map(game => (
                        <img
                            src={game && game.game_images && game.game_images[0].url}
                            style={{ maxWidth: '3rem', marginTop: '1rem', border: '2px solid #282A3A' }}
                        />
                    ))}
                    <button
                    style={{ backgroundColor: hover ? '#C69749' : 'white' , fontSize: '1rem', fontWeight:'bold', marginTop: '2rem', padding: '1rem', border: '3.5px solid #282A3A', borderRadius: '5px', cursor: 'pointer'}}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClick={cartCheckoutHandler}>Place Order</button>
                </div>
            </div>
        </>
    )
}

export default CheckoutModal
