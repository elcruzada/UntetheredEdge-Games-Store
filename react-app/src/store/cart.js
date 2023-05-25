// @cart_routes.route('/user')
// def get_current_cart():
//     current_user_cart = db.session.query(cart).filter(cart.c.user_id == current_user.id).all()
//     cart_game_ids = [i[1] for i in current_user_cart]
//     user_games = [Game.query.get(i).to_dict() for i in cart_game_ids]
//     # print(user_games)
//     return { "user_cart": user_games }

// @cart_routes.route("/<int:id>", methods=['POST'])
// @login_required
// def add_to_cart(id):
//     current_cart_user = User.query.get(current_user.id)
//     game_to_add = Game.query.get(id)

//     if not current_cart_user:
//         return { "errors": "Cart not found" }

//     if not game_to_add:
//         return { "errors": "Game not found" }

//     current_cart_user.cart_user.append(game_to_add)

//     db.session.add(current_cart_user)
//     db.session.commit()
//     return { "success": "Added to cart" }

// @cart_routes.route("/<int:id>", methods=['DELETE'])
// @login_required
// def delete_game_from_cart(id):
//     current_cart_user = User.query.get(current_user.id)
//     game_to_delete = Game.query.get(id)

//     current_cart_user.cart_user.remove(game_to_delete)

//     db.session.commit()
//     return { "success": "Game deleted from cart!" }
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
