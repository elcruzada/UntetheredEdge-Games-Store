import { useEffect, useState } from 'react';

import './UserProfilePage.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllGamesThunk } from '../../store/games';
import { getUserOrdersThunk } from '../../store/orders';
import { useHistory } from 'react-router-dom';
import { authenticate } from '../../store/session';

const UserProfilePage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    // console.log(sessionUser)
    const userOrders = useSelector(state => state.orders.userOrders.game_orders)
    console.log('USSSER', userOrders)

    // const newOrders = {}
    // if (sessionUser.orders && sessionUser.orders.length) {
    //     sessionUser.orders.forEach(order => {
    //         newOrders[order.id] = order
    //     })
    // }
    // const orders = Object.values(newOrders)


    // console.log(orders)

    // const allGames = useSelector(state => state.games.allGames)

    useEffect(() => {
        dispatch(getAllGamesThunk())
        dispatch(authenticate())
        dispatch(getUserOrdersThunk())
    },[dispatch])


    // if (gamesAndOrders && gamesAndOrders.orders) {

    // }

    // const gamesIterable = Object.values(allGames)
    // console.log(gamesIterable)
    // const [orders, setOrders] = useState([]);

    // useEffect(() => {
    //     const fetchOrders = async () => {
    //         try {
    //             const response = await fetch('/api/users');
    //             // console.log('REESS', RESSPONSE)
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 console.log('DAAATA', data)
    //                 setOrders(data.orders);
    //             } else {
    //                 // Handle the error response here
    //             }
    //         } catch (error) {
    //             console.error(error);
    //             // Handle the error here
    //         }
    //     };

    //     fetchOrders();
    // }, []);
    // console.log('ORRDERS', orders)
    // if (!sessionUser) return null
    // if (!userOrders) return null

    return (
        <div className='user_profile_container'>
            <div className='user-profile-inner-container'>
            <h1
            style={{color:'white'}}
            >{`You have $${sessionUser && sessionUser.account_capital} left in your wallet`}</h1>
            <h1
            style={{color: 'white'}}
            >Transaction History</h1>
            {sessionUser && sessionUser.orders && sessionUser.orders.length && sessionUser.orders.map((order) => (
                <div key={order.id}
                style={{color:'white'}}
                >
                    <p>Order ID: {order.id}</p>
                    <p>Order Total: {order.price_total}</p>

                </div>
            ))}
            {userOrders && userOrders.map(order => (
                <div key={order.id}
                style={{color: 'white', marginTop: '2rem'}}
                >
                <p>Game Name: {order.game_name}</p>
                <p>Transaction ID: {order.order_id}</p>
                <p>Game Price: {order.game_price}</p>
                <p>Order Total: {order.order_price_total}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default UserProfilePage
