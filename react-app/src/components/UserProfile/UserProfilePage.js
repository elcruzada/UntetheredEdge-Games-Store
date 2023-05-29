import { useEffect, useState } from 'react';

import './UserProfilePage.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllGamesThunk } from '../../store/games';
import { getUserOrdersThunk } from '../../store/orders';
import { useHistory } from 'react-router-dom';
import { authenticate } from '../../store/session';
import {TransactionTable, UserOrdersTable} from '../UI/Table/TransactionTable';

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
    }, [dispatch])


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
                {!sessionUser && <h3 style={{color: 'white'}}>Please sign in to view your transaction history</h3>}
                <h1
                    style={{ color: 'white', paddingBottom: '1rem' }}
                >{`You have $${sessionUser ? sessionUser.account_capital : 'N/A'} left in your wallet`}</h1>
                {sessionUser && sessionUser.account_capital < 0 &&
                <p
                style={{color: 'white', paddingBottom: '3rem'}}
                >You have less than 0 dollars in your account. Pay your outstanding balance or UntetheredEdge Interactive will take action.</p>}
                <h1
                    style={{ color: 'white', paddingBottom: '1.5rem' }}
                >Transaction History</h1>
                {/* {sessionUser.orders && sessionUser.orders.length && sessionUser.orders.map((order) => (
                <div key={order.id}
                style={{color:'white'}}
                >
                    <p>Order ID: {order.id}</p>
                    <p>Order Total: {order.price_total}</p>

                </div>
            ))} */}
                {sessionUser && sessionUser.orders && sessionUser.orders.length ? (
                    <TransactionTable orders={sessionUser.orders} />
                ) : (
                    <p style={{color:'white'}}>No orders found.</p>
                )}

                <div style={{margin: '2rem'}}/>

                {userOrders && <UserOrdersTable userOrders={userOrders} />}
                {/* {userOrders && userOrders.map(order => (
                    <div key={order.id}
                        style={{ color: 'white', marginTop: '2rem' }}
                    >
                        <p>Game Name: {order.game_name}</p>
                        <p>Transaction ID: {order.order_id}</p>
                        <p>Game Price: {order.game_price}</p>
                        <p>Order Total: {order.order_price_total}</p>
                    </div>
                ))} */}
            </div>
        </div>
    )
}

export default UserProfilePage
