import { cn } from '@/lib/utils';
import { Radiation } from 'lucide-react';
import React, { FC } from 'react';

type TechProLogoProps = {
  inverted?: boolean;
};

const TechProLogo: FC<TechProLogoProps> = ({ inverted = false }) => {
  // api

  // hooks

  // states

  // variables

  // styles

  // functions

  // effects

  // components

  return (
    <div
      className={cn('px-2 rounded-lg flex items-center gap-2 w-fit', {
        'bg-slate-800 text-slate-100': !inverted,
        'bg-slate-100 text-slate-800': inverted,
      })}
    >
      <Radiation className='h-5 w-5' />
      <h1 className='text-2xl font-bold'>TechPro</h1>
    </div>
  );
};

export default TechProLogo;
