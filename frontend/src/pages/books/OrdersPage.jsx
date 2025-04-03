import React from 'react'
import { useGetOrdersByEmailQuery } from '../../redux/features/orders/ordersApi'
import { useAuth } from '../../context/AuthContext'

const OrdersPage = () => {

  const { currentUser } = useAuth()

  const email = currentUser.email

  const { data: orders = [], isLoading, isError } = useGetOrdersByEmailQuery(email)


  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error fetching orders</div>
  }

  if (!Array.isArray(orders) || orders.length === 0) {
    return <div className='container'>No orders found</div>;
  }

  console.log("Orders data:", orders);

  return (
    <div className='container mx-auto p-6'>
      <h2 className='text-2xl font-semibold mb-4'>Your Orders</h2>
      {
        orders.length === 0 ? (<div className='text-center text-gray-500'>No orders found</div>) : (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {
            orders.map((order, index) => (
              <div key={order._id} className='shadow-md rounded p-4 mb-4'>
                <p className='text-sm bg-gray-200 rounded text-center py-2 mb-2 text-gray-800 font-semibold w-10'># {index + 1}</p>
                <h2 className='font-bold'>Order ID: {order._id}</h2>
                <p className='text-gray-600'>Name: {order.name}</p>
                <p className='text-gray-600'>Email: {order.email}</p>
                <p className='text-gray-600'>Phone: {order.phone}</p>
                <p className='text-gray-600 font-bold py-4'>Total Price: {order.totalPrice}</p>
                <h3 className='font-semibold mt-2'>Address:</h3>
                <p className='text-gray-600'>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
                <h3 className='font-semibold mt-2'>Products Id:</h3>
                <ul>
                  {
                    order.productIds.map((productId) => (
                      <li key={productId} className='text-gray-600'>{productId}</li>
                    ))
                  }
                </ul>


              </div>
            ))
          }
        </div>)
      }

    </div>
  )
}

export default OrdersPage