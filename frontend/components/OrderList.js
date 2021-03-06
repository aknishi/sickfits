import React from 'react';
import { Query } from 'react-apollo';
import { formatDistance } from 'date-fns';
import Link from 'next/link';
import styled from 'styled-components';
import gql from 'graphql-tag';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';
import OrderItemStyles from './styles/OrderItemStyles';

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      items {
        id
        title
        price
        description
        quantity
        image
      }
    }
  }
`;

const orderUl = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

class OrderList extends React.Component {
  render() {
    return (
      <Query query={USER_ORDERS_QUERY}>
        {({ data, error, loading }) => {
          if (error) return <Error error={error} />
          if (loading) return <p>Loading...</p>
          const orders = data.orders;
          const orderItems = orders.map(order => (
            <OrderItemStyles key={order.id}>
              <Link
                href={{
                  pathname: '/order',
                  query: { id: order.id },
                }}
              >
                <a>
                  <div className="order-meta">
                    <div className="details">
                      <p>Order: {order.id}</p>
                      <p>Total items: {order.items.reduce((a, b) => a + b.quantity, 0)}</p>
                      <p>Total: {formatMoney(order.total)}</p>
                    </div>
                    <h4 className="time-ago">{`${formatDistance(order.createdAt, new Date())} ago`}</h4>
                  </div>
                  <div className="images">
                    {order.items.map(item => (
                      <img key={item.id} src={item.image} alt={item.title} />
                    ))}
                  </div>
                </a>
              </Link>
            </OrderItemStyles>
          ))
          return (
            <div>
              <h2>You have {orders.length} orders</h2>
              <orderUl>
                {orderItems}
              </orderUl>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default OrderList;
export { USER_ORDERS_QUERY };