import React, { FC } from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Cross, Menu, X } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import SidebarDrawerNavItem from './SidebarDrawerNavItem';
import { sidebarData } from '@/data/sidebar.data';

type SidebarDrawerProps = {};

const SidebarDrawer: FC<SidebarDrawerProps> = ({}) => {
  // api

  // hooks

  // states

  // variables

  // styles

  // functions

  // effects

  // components
  const trigger = (
    <DrawerTrigger asChild>
      <Button variant='link' size='icon'>
        <Menu className='h-6 w-6' />
      </Button>
    </DrawerTrigger>
  );

  const header = (
    <DrawerHeader className='text-left gap-0'>
      <div className='flex justify-between'>
        <DrawerTitle>Navbar</DrawerTitle>
        <DrawerClose>
          <X />
        </DrawerClose>
      </div>
      <DrawerDescription>Visit Pages</DrawerDescription>
    </DrawerHeader>
  );

  const body = (
    <div className='h-full p-4 flex flex-col gap-4'>
      {sidebarData.map((item, index) => (
        <SidebarDrawerNavItem key={index} href={item.href}>
          {item.title}
        </SidebarDrawerNavItem>
      ))}
    </div>
  );

  const footer = (
    <DrawerFooter>
      <Separator />
      <h1>
        TechPro Inc®, <span className='font-semibold'>2024</span>
      </h1>
    </DrawerFooter>
  );

  return (
    <Drawer direction='right'>
      {trigger}
      <DrawerContent className='h-full w-full bg-slate-50'>
        {header}
        {body}
        {footer}
      </DrawerContent>
    </Drawer>
  );
};

export default SidebarDrawer;
