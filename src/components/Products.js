import React from 'react';
import { products } from '../data';
import { Card } from './Card';

export const Products = () => {
  return (
    <div className='w-10/12 mx-auto mt-8 flex flex-wrap gap-x-3 items-baseline justify-center gap-y-10'>
        {
            products.map((post) => (
                <Card key={post.id} post = {post}/>
            ))
        }
    </div>
  )
}
