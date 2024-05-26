'use client';
import CategoryButton from '@/components/reusable-ui/buttons/category-buttons/CategoryButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@radix-ui/react-separator';
import { Heart, Mail, Search, ShoppingCart, User } from 'lucide-react';
import React, { FC } from 'react';

type NavbarProps = {};

const Navbar: FC<NavbarProps> = ({}) => {
  // api

  // hooks

  // states

  // variables

  // styles

  // functions

  // effects

  // components
  const rightIcons = (
    <div className='flex'>
      <Button variant='link' size='icon'>
        <Heart className='h-4 w-4' />
      </Button>
      <Button variant='link' size='icon'>
        <ShoppingCart className='h-4 w-4' />
      </Button>
      <Button variant='link' size='icon'>
        <User className='h-4 w-4' />
      </Button>
    </div>
  );

  const categoryButtonsMap = Array(8)
    .fill(0)
    .map((_, index) => <CategoryButton key={index}></CategoryButton>);

  const bottom = (
    <div className='w-full bg-zinc-800'>
      <div className='p-x-2 w-full flex items-center justify-between max-w-[1440px] mx-auto'>
        {categoryButtonsMap}
      </div>
    </div>
  );

  return (
    <div className='w-full'>
      <div className='p-2 w-full flex items-center justify-between max-w-[1440px] mx-auto'>
        <div className='flex gap-3 max-w-md'>
          <h1 className='text-3xl font-bold'>TechPro</h1>
          <div className='flex w-full  items-center space-x-2'>
            <Input className='bg-slate-100' placeholder='Search products...' />
            <Button type='submit' size='icon'>
              <Search className='h-4 w-4' />
            </Button>
          </div>
        </div>
        <div className='flex gap-4'>
          <Button variant='link'>Home</Button>
          <Button variant='link'>About</Button>
          <Button variant='link'>Contact Us</Button>
          <Button variant='link'>Blog</Button>
        </div>
        {rightIcons}
      </div>
      {bottom}
    </div>
  );
};

export default Navbar;
