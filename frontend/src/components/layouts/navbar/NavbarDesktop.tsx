import CategoryButton from '@/components/reusable-ui/buttons/category-buttons/CategoryButton';
import TechProLogo from '@/components/reusable-ui/logo/tech-pro-logo/TechProLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import categoryData from '@/data/category.data';
import { sidebarData } from '@/data/sidebar.data';
import { Heart, Search, ShoppingCart, User } from 'lucide-react';
import React, { FC } from 'react';

type NavbarDesktopProps = {};

const NavbarDesktop: FC<NavbarDesktopProps> = ({}) => {
  // api

  // hooks

  // states

  // variables

  // styles

  // functions

  // effects

  // components
  const leftSection = (
    <div className='flex w-full gap-4 max-w-lg'>
      <TechProLogo />
      <div className='flex w-full items-center space-x-2'>
        <Input className='bg-slate-100' placeholder='Search products...' />
        <Button type='submit' size='icon'>
          <Search className='h-4 w-4 text-zinc-300' />
        </Button>
      </div>
    </div>
  );

  const navButtons = (
    <div className='flex gap-4'>
      {sidebarData.map((item, index) => (
        <Button key={index} variant='link'>
          {item.title}
        </Button>
      ))}
    </div>
  );

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

  const categoryButtonsMap = categoryData.map((item, index) => (
    <>
      <CategoryButton
        key={index}
        href={item.href}
        label={item.label}
        icon={item.icon}
      />
      {index !== categoryData.length - 1 && (
        <div className='bg-slate-600 h-3 w-[1px]'></div>
      )}
    </>
  ));

  const bottom = (
    <div className='w-full bg-zinc-800'>
      <div className='p-x-2 w-full flex items-center justify-between max-w-[1440px] mx-auto'>
        {categoryButtonsMap}
      </div>
    </div>
  );

  return (
    <div className='w-full hidden md:block fixed top-0 bg-white'>
      <div className='p-2 w-full flex items-center justify-between max-w-[1440px] mx-auto'>
        {leftSection}
        {navButtons}
        {rightIcons}
      </div>
      {bottom}
    </div>
  );
};

export default NavbarDesktop;
