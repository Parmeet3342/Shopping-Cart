import React, { useContext } from 'react';
import { FaRupeeSign } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CartContext } from '../context/CartContext';

export const CartItem = ({item}) => {
  const {cartHandler,totalItem} = useContext(CartContext);
  return (
   <div>
    
    <div className='w-full flex gap-x-12 items-center'>
        <div>
          <img src={item.image}
          width={140}
          height={140}/>
        </div>
        <div className='flex flex-col gap-y-3'>
          <h2 className='text-lg font-bold'>{item.title}</h2>
          <p className='text-sm '>
            {
              item.description.length > 81? item.description.substring(0,81)+"...":item.description
            }
          </p>
          <div className='flex items-center justify-between'>
            <div className='flex gap-x-1 items-center'>
              <FaRupeeSign className='text-green-600'/>
              <p className='text-md font-bold'>{item.price}</p>
            </div>

            <div onClick={() => cartHandler(item)}
            className='cursor-pointer relative  flex justify-center items-center '
            >
              <div className='w-[20px] h-[20px] rounded-full bg-slate-300 absolute z-10'></div>
              <MdDelete className='absolute z-20'/>
            </div>
          </div>
        </div>
    </div>

    {
      totalItem > 1?(
        <div className='w-full h-[1px] bg-blue-900 my-6'></div>
      ):<div></div>
    }
   </div>
    
    
  )
}
