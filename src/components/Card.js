import React, { useContext, useState } from 'react';


import { CartContext } from '../context/CartContext';

export const Card = ({post}) => {
    const {cartHandler,cartItems} = useContext(CartContext);
    const title =  post.title.length > 16 ? post.title.substring(0,16) + "..." : post.title;

  return (
    <div className='w-[23%] flex flex-col  gap-y-4 items-center justify-between px-2 shadow-gray-300
     shadow-md py-2 h-[350px]  rounded-md border-t hover:scale-x-105 hover:scale-y-110 transition-all duration-200 hover:shadow-md hover:bg-white'>
            <div className='w-[80%] space-y-1'>
                <h2 className='font-semibold text-md tracking-tight'>{title}</h2>
            
                <p className='text-sm  text-gray-400 tracking-tighter'>
                    {
                        post.description.length > 52 ? post.description.substring(0,51)+"..." : post.description
                    }
                </p>
            </div>

           <div className='w-full h-[170px] flex justify-center object-cover'>
           <img src={post.image} 
            width={140}
            height={140}
            alt = "item" 
              
            />
           </div>

            <div className='flex w-full justify-between items-center mt-2'>
                <div className='flex gap-x-1 items-center'>
                    <p className='text-lg font-bold text-green-600'>$</p>
                    <p className='text-md font-bold'>{post.price}</p>
                </div>

                <button onClick={() => cartHandler(post)}
                className='px-3 py-1 border-2 rounded-2xl border-blue-950 tracking-tighter'
                >
                {
                    cartItems.includes(post.id) ? "Remove Item" : "Add to Cart"
                }
                </button>
            </div>
    </div>
  )
}
