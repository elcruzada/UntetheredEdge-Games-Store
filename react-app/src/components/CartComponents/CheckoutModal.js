import { useModal } from "../../context/Modal"

const CheckoutModal = () => {
    const { closeModal } = useModal()

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
                        <form>
                            <input
                                id='card-number'
                                type='text'
                                placeholder='Card Number'
                            />
                            <div className='expiration-cvv-container'>

                                <input
                                    id='expiration'
                                    type='text'
                                    placeholder='Expiration'
                                />
                                <input
                                    id='cvv'
                                    type='text'
                                    placeholder='CVV'
                                />
                            </div>
                            <div className='zip-code-state-city-container'>
                            <input
                                    id='card-number'
                                    type='text'
                                    placeholder='ZIP code'
                                />
                                <input
                                    id='card-number'
                                    type='text'
                                    placeholder='State'
                                />
                                <input
                                    id='card-number'
                                    type='text'
                                    placeholder='City'
                                />
                            </div>
                        </form>
                    </div>
                    <p>By choosing to save your payment information, this payment method will be selected as the default for all purchases made using UntetheredEdge Games payment, including purchases in the UntetheredEdge Games Store.</p>
                </div>
                <div className='checkout-modal-wrapper-right-column'>

                </div>
            </div>
        </>
    )
}

export default CheckoutModal
