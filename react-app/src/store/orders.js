const GET_USERORDERS = "orders/GET_USERORDERS"

export const getUserOrdersAction = (orders) => ({
    type: GET_USERORDERS,
    orders
})

export const getUserOrdersThunk = () => async (dispatch) => {
    const res = await fetch(`/api/cart/orders`)

    if (res.ok) {
        const orders = await res.json()
        dispatch(getUserOrdersAction(orders))
    }
}


const initialState = {
    userOrders: {}
}

export default function orderReducer(state = initialState, action) {
    let newOrdersState;
    switch (action.type) {
        case GET_USERORDERS:
            newOrdersState = { ...state, userOrders: { ...action.orders } }
            // console.log('newCartState', action)
            return newOrdersState
        default:
            return state
    }
}
