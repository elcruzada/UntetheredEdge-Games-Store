import { useEffect, useState } from 'react';
import './UserProfilePage.css'

const UserProfilePage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('/api/orders');
                if (response.ok) {
                    const data = await response.json();
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

    return (
        <div>
            <h1>Transaction History</h1>
            {orders.map((order) => (
                <div key={order.id}>
                    <p>Order ID: {order.id}</p>
                    {/* Display other order details as needed */}
                </div>
            ))}
        </div>
    )
}

export default UserProfilePage
