import TechProLogo from '@/components/reusable-ui/logo/tech-pro-logo/TechProLogo';
import SidebarDrawer from '@/components/sections/sidebar-drawer/SidebarDrawer';
import React, { FC } from 'react';

type NavbarMobileProps = {};

const NavbarMobile: FC<NavbarMobileProps> = ({}) => {
  // api

  // hooks

  // states

  // variables

  // styles

  // functions

  // effects

  // components

  return (
    <div className='w-full flex md:hidden justify-between fixed top-0 bg-white px-4 py-2 z-50'>
      <TechProLogo />
      <SidebarDrawer />
    </div>
  );
};

export default NavbarMobile;
