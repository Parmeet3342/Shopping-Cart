import React, { useContext } from 'react'

import { CartContext } from '../context/CartContext'
import { CartItem } from '../components/CartItem';
import { products } from '../data';
   
export const Cart = () => {
  const {cartItems,totalItem,totalAmount} = useContext(CartContext);

  function getItems(){
    let items=[];
    products.forEach((element) => {
      if(cartItems.includes(element.id)){
        items.push(element);
      }
    })
    return items;
  }
  return (
    <div className='w-10/12 flex mx-auto mt-6 h-auto gap-x-28 px-8 py-6'>
      <div className='w-[55%] flex flex-col gap-y-8 justify-center items-center'>
        {
          getItems().length > 0? (
            getItems().map((item,index) => (
            <CartItem key={index} item = {item}/>
          ))) : <div>No Item Added</div>
        }
      </div>

      <div className='flex flex-col justify-between w-[30%]'>
        <div>
          <div className='text-green-700 -space-y-2'>
            <p className='uppercase text-2xl font-semibold'>Your Cart</p>
            <p className='uppercase text-3xl font-bold'>Summary</p>
          </div>

        
          <p className='text-md font-semibold mt-4'>{`Total Items: ${totalItem}`}</p>
        </div>

        <div>
          <div className='mb-4 flex gap-x-1'>
            <p className='text-md font-semibold'>Total Amount:</p>
            <p className='text-md font-semibold text-green-600'>$ </p>
            <p className='text-md font-semibold'>{totalAmount}</p>
          </div>
          <button className='bg-green-700 w-full rounded-md text-white px-5 py-1 font-bold text-opacity-90'>Checkout Now</button>
        </div>
       
      </div>
      
    </div>
  )
}
