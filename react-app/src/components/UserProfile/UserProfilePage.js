import { useEffect, useState } from 'react';

import './UserProfilePage.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllGamesThunk } from '../../store/games';
import { getUserOrdersThunk } from '../../store/orders';
import { useHistory } from 'react-router-dom';
import { authenticate } from '../../store/session';
import { TransactionTable, UserOrdersTable } from '../UI/Table/TransactionTable';
import Footer from '../UI/Footer';
import LowerNavBar from '../LowerNavBar/LowerNavBar';

const UserProfilePage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    // console.log(sessionUser)
    const userOrders = useSelector(state => state.orders.userOrders.game_orders)
    const [isDropdownOpen, setDropdownOpen] = useState(false);
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
    if (userOrders) {
        // const orders = userOrders.forEach(order => {

        //     order.game_name
        // })
        // console.log('OOOORDERS', orders)
    }
    // const gamesIterable = Object.values(allGames)
    // console.log(gamesIterable)
    // const [orders, setOrders] = useState([]);

    // if (!sessionUser) return null
    // if (!userOrders) return null

    return (
        <>
            <div className='user_profile_container'>
                <div className='user-profile-inner-container'>
                    <LowerNavBar />
                    <div className='user-profile-information'>
                        <div className='user-profile-information-left-column'>
                            <img className='user-profile-image'
                            src='https://64.media.tumblr.com/2bac2857b1e074484f6ccc583bc35718/d77e58046f6fa9ba-20/s1280x1920/6120b7884a03a4ca88a47590def094cf61627931.jpg'
                            alt='gradient'
                            style={{height: '15rem', width:'15rem', borderRadius: '50%'}}
                            ></img>
                        </div>
                        <div className='user-profile-information-right-column'>
                            <div className='user-profile-information-right-column-top'>
                                <h1 style={{ color: 'white' }}>{sessionUser && sessionUser.username}</h1>
                            </div>
                            <div className='user-profile-information-right-column-bottom'
                                style={{display: 'flex', justifyContent: 'space-between'}}
                            >
                                <div className='user-profile-information-right-column-bottom-information'
                                >
                                    <div
                                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                                        style={{display: 'flex', cursor: 'pointer'}}
                                    >
                                    <h3 style={{ color: 'white', textDecoration: 'underline' }}
                                    >Your Games</h3>
                                    <i className="fa-solid fa-caret-down" style={{color: 'white', padding: '5px'}}></i>
                                    </div>
                                    {isDropdownOpen && <ul>
                                        {userOrders && [...new Set(userOrders.map(order => order.game_name))].map((gameName, index) => (
                                            <li key={index} style={{ textDecoration: 'none', color: 'white', padding: '2px' }}>{gameName}</li>
                                        ))}
                                    </ul>}
                                </div>
                                <div className='user-profile-information-right-column-bottom-information'>
                                    <h3 style={{color: 'white'}}>Your Wallet</h3>
                                    <p style={{textDecoration: 'none', color: 'white', padding: '2px'}}>{sessionUser && sessionUser.account_capital}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='user-profile-bottom-orders-installer-tab'>
                        <div className='user-profile-bottom-orders-installer-tab-orders'>Orders</div>
                        <div className='user-profile-bottom-orders-installer-tab-installer'>Installer</div>
                    </div>
                    {!sessionUser && <h3 style={{ color: 'white' }}>Please sign in to view your transaction history</h3>}
                    <h1
                        style={{ color: 'white', paddingBottom: '1rem' }}
                    >{`You have $${sessionUser ? sessionUser.account_capital : 'N/A'} left in your wallet`}</h1>
                    {sessionUser && sessionUser.account_capital < 0 &&
                        <p
                            style={{ color: 'white', paddingBottom: '3rem' }}
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
                        <p style={{ color: 'white' }}>No orders found.</p>
                    )}

                    <div style={{ margin: '2rem' }} />

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
            <Footer />
        </>
    )
}

export default UserProfilePage
