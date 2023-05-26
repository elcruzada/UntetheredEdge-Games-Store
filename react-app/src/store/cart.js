const GET_USERCART = "cart/GET_USERCART"
const POST_CART = "cart/POST_CART"
const DELETE_CART = "cart/DELETE_CART"

export const getUserCartAction = (userCart) => ({
    type: GET_USERCART,
    userCart
})

export const postCartAction = (cart) => ({
    type: POST_CART,
    cart
})

export const deleteCartAction = (cart) => ({
    type: DELETE_CART,
    cart
})

export const getUserCartThunk = () => async (dispatch) => {
    const res = await fetch(`/api/cart/user`)

    if (res.ok) {
        const userCart = await res.json()
        dispatch(getUserCartAction(userCart))
    }
}

export const postUserCartThunk = (gameId) => async (dispatch) => {
    const res = await fetch(`/api/cart/${gameId}`, {
        method: 'POST',
    })
    if (res.ok) {
        const addedCart = await res.json()
        dispatch(postCartAction(addedCart))
    }
}

export const deleteUserCartThunk = (gameId) => async (dispatch) => {
    const res = await fetch(`/api/cart/${gameId}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        const deletedCart = await res.json()
        dispatch(deleteCartAction(deletedCart))
    }
}


const initialState = {
    cart: {}
}

export default function cartReducer(state = initialState, action) {
    let newCartState;
    switch (action.type) {
        case GET_USERCART:
            newCartState = { ...state, cart: { ...action.cart } }
            // console.log('newCartState', action)
            action.userCart.user_cart.forEach(game => newCartState.cart[game.id] = game)
            return newCartState
        case POST_CART:
            newCartState = { ...state, cart: { ...state.cart, ...action.cart } }
            return newCartState
        case DELETE_CART:
            newCartState = { ...state, cart: { ...state.cart, ...action.cart } }
            return newCartState
        default:
            return state
    }
}
