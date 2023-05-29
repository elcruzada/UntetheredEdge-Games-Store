import React from "react";
import "./TransactionTable.css";

const TransactionTable = ({ orders }) => {
    return (

        <table className="table">
            <thead>
                {orders && (
                    <tr>
                        <th>Order ID</th>
                        <th>Order Total</th>
                    </tr>
                )}
            </thead>
            <tbody
                style={{ color: 'white' }}
            >
                {orders && orders.map((order) => (
                    <tr key={order.id}>
                        <td style={{ textAlign: 'center' }}>{order.id}</td>
                        <td style={{ textAlign: 'center' }}>{order.price_total}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
};

const UserOrdersTable = ({ userOrders }) => {
    return (
        <table className="table">
        <thead>
            {userOrders &&
            <tr>
                <th>Transaction ID</th>
                <th>Game Name</th>
                <th>Game Price</th>
                <th>Order Total</th>
            </tr>
            }
        </thead>
          <tbody style={{ color: "white" }}>
            {userOrders &&
              userOrders.map((order) => (
                <tr key={order.id}>
                  <td style={{ textAlign: 'center' }}>{order.order_id}</td>
                  <td style={{ textAlign: 'center' }}>{order.game_name}</td>
                  <td style={{ textAlign: 'center' }}>{order.game_price}</td>
                  <td style={{ textAlign: 'center' }}>{order.order_price_total}</td>
                </tr>
              ))}
          </tbody>
        </table>
      );
};

export { TransactionTable, UserOrdersTable };
