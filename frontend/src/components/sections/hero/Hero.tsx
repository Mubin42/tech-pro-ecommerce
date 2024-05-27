import { Button } from '@/components/ui/button';
import { imageURL } from '@/lib/imageURL';
import React, { FC } from 'react';

type HeroProps = {};

const Hero: FC<HeroProps> = ({}) => {
  // api

  // hooks

  // states

  // variables

  // styles

  // functions

  // effects

  // components

  const left = (
    <div className='w-full flex flex-col gap-6'>
      <span className='w-20 h-2 bg-gray-800 dark:bg-white'></span>
      <h1 className='text-4xl lg:text-7xl font-bold'>Tech Pro</h1>
      <h1 className='text-2xl lg:text-4xl font-bold text-slate-800'>
        E-Commerce
      </h1>
      <p className='text-sm sm:text-base text-gray-700 dark:text-white'>
        Tech Pro is a modern e-commerce platform that provides a wide range of
        products. We focus on quality and affordability. Our products are
        suitable for all types of customers. If you are a tech enthusiast, you
        will love our products.
      </p>
      <div>
        <Button>Shop Now</Button>
        <Button>View Categories</Button>
      </div>
    </div>
  );

  const right = (
    <div className=''>
      <img
        src='https://www.tailwind-kit.com/images/object/10.png'
        className='max-w-48 lg:max-w-sm m-auto'
      />
    </div>
  );

  return (
    <div className='bg-slate-300 h-screen flex'>
      <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[1440px] p-4 mx-auto flex-1 items-center'>
        {left}
        {right}
      </div>
    </div>
  );
};

export default Hero;
