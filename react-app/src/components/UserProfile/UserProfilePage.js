import { useEffect, useState } from 'react';

import './UserProfilePage.css'

const UserProfilePage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('/api/users');
                // console.log('REESS', RESSPONSE)
                if (response.ok) {
                    const data = await response.json();
                    console.log('DAAATA', data)
                    setOrders(data.orders);
                } else {
                    // Handle the error response here
                }
            } catch (error) {
                console.error(error);
                // Handle the error here
            }
        };

        fetchOrders();
    }, []);
    console.log('ORRDERS', orders)

    return (
        <div className='user_profile_container'>
            <div className='user-profile-inner-container'>

            <h1
            style={{color: 'white'}}
            >Transaction History</h1>
            {orders.map((order) => (
                <div key={order.id}>
                    <p>Order ID: {order.id}</p>
                    <p>{order.price_total}</p>
                    {/* Display other order details as needed */}
                </div>
            ))}
            </div>
        </div>
    )
}

export default UserProfilePage
