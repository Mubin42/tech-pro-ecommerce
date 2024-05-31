import Link from 'next/link';
import React, { FC } from 'react';

type FooterListProps = {
  title: string;
  items: { title: string; href: string }[];
};

const FooterList: FC<FooterListProps> = ({ title, items }) => {
  // api

  // hooks

  // states

  // variables

  // styles

  // functions

  // effects

  // components

  return (
    <div className='text-zinc-200 space-y-4 text-center lg:text-left'>
      <h1 className='font-semibold text-lg'>{title}</h1>
      <ul className='text-sm flex flex-col gap-2 lg:gap-3'>
        {items.map((item, index) => (
          <Link key={index} href={item.href}>
            <li className='hover:underline'>{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
