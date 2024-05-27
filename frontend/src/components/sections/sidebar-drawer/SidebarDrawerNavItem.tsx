import Link from 'next/link';
import React, { FC } from 'react';

type SidebarDrawerNavItemProps = {
  children: React.ReactNode;
  href: string;
};

const SidebarDrawerNavItem: FC<SidebarDrawerNavItemProps> = ({
  children,
  href,
}) => {
  // api

  // hooks

  // states

  // variables

  // styles

  // functions

  // effects

  // components

  return (
    <Link href={href}>
      <h1 className='font-semibold text-3xl'>{children}</h1>
    </Link>
  );
};

export default SidebarDrawerNavItem;
