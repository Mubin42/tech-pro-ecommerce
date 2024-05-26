import React, { FC } from 'react';

type FooterProps = {};

const Footer: FC<FooterProps> = ({}) => {
  // api

  // hooks

  // states

  // variables

  // styles

  // functions

  // effects

  // components
  const iconSection = <div className='h-[300px] bg-blue-400 w-full'></div>;

  return (
    <div className='w-full bg-zinc-900'>
      <div className='p-2 w-full grid-cols-1 max-w-[1440px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
          <div className='h-[300px] bg-purple-400 w-full'></div>
          <div className='h-[300px] bg-yellow-400 w-full'></div>
          <div className='h-[300px] bg-orange-400 w-full'></div>
        </div>
        {iconSection}
      </div>
    </div>
  );
};

export default Footer;
