import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';

type CategoryButtonProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const CategoryButton: FC<CategoryButtonProps> = ({ href, label, icon }) => {
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
      <Button variant='link' className='text-zinc-300 hover:no-underline'>
        {icon} {label}
      </Button>
    </Link>
  );
};

export default CategoryButton;
