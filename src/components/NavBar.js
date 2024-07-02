import React from 'react'
import { NavLink } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import image from '../image/logo.png'


export const NavBar = () => {
  return (
    <div className="w-full py-3 flex justify-center bg-blue-950">
      <div className="w-9/12 mx-auto flex justify-between items-center">
        <NavLink to="/">
           
            <img src={image}
            className="w-[140px] h-[50px] object-contain"
            />
           
        </NavLink>

        <div className='flex gap-x-4 text-white'>
          <NavLink to="/">
            <button className='font-semibold text-md'>
                Home
            </button>
          </NavLink>
          <NavLink to="/Cart">
            <button className='text-lg '>
                <BsCart4/>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
  
}
