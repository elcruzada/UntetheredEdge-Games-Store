import { useEffect, useState } from 'react';

import './UserProfilePage.css'
import { useSelector } from 'react-redux';

const UserProfilePage = () => {
    const sessionUser = useSelector(state => state.session.user)
    console.log(sessionUser)
    const newOrders = {}
    if (sessionUser.orders && sessionUser.orders.length) {
        sessionUser.orders.forEach(order => {
            newOrders[order.id] = order
        })
    }
    const orders = Object.values(newOrders)
    console.log(orders)
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

    return (
        <div className='user_profile_container'>
            <div className='user-profile-inner-container'>

            <h1
            style={{color: 'white'}}
            >Transaction History</h1>
            {orders.map((order) => (
                <div key={order.id}
                style={{color:'white'}}
                >
                    <p>Order ID: {order.id}</p>
                    <p>{order.price_total}</p>
                    {order.games.forEach(game => {
                        // console.log(game.name)

                        return <p
                        style={{color:'white'}}
                        >hello</p>
                        // <img
                        //   src={game.game_images[0].url}

                        // />

                        // </p>

                        })}

                </div>
            ))}
            </div>
        </div>
    )
}

export default UserProfilePage
