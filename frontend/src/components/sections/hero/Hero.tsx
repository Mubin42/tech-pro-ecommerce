import { imageURL } from '@/lib/imageURL';
import React, { FC } from 'react';

type HeroProps = {};

const Hero: FC<HeroProps> = ({}) => {
  // api

  // hooks

  // states

  // variables

  // styles
  const heroStyle = {
    backgroundImage: `url(${imageURL.hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  // functions

  // effects

  // components

  return (
    <div className='h-screen w-full' style={heroStyle}>
      HeroSection
    </div>
  );
};

export default Hero;
