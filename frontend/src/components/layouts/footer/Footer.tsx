import TechProLogo from '@/components/reusable-ui/logo/tech-pro-logo/TechProLogo';
import React, { FC } from 'react';
import FooterList from './FooterList';
import { footerIcons, servicesData } from '@/data/footer.data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
  const leftSection = (
    <div className='w-full gap-8 flex flex-col items-center lg:items-start'>
      <TechProLogo inverted />
      <p className='text-zinc-200 px-3 text-center lg:px-0 lg:text-left'>
        {`We are a residential interior design firm located in Portland. Our
        boutique-studio offers more than just design, we offer a partnership`}
      </p>
    </div>
  );

  const middleSection = (
    <FooterList title={servicesData.title} items={servicesData.items} />
  );

  const rightSection = (
    <FooterList title={servicesData.title} items={servicesData.items} />
  );

  const iconSection = (
    <div className='flex justify-center lg:justify-start'>
      {footerIcons.map((icon, index) => (
        <Link key={index} href={icon.href} target='_blank'>
          <Button
            className='text-zinc-200'
            variant='link'
            size='icon'
            aria-label={icon.title}
          >
            {icon.icon}
          </Button>
        </Link>
      ))}
    </div>
  );

  return (
    <div className='w-full bg-zinc-900 py-16 lg:py-32'>
      <div className='p-2 w-full grid grid-cols-1 max-w-[1440px] mx-auto gap-6'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {leftSection}
          {middleSection}
          {rightSection}
        </div>
        {iconSection}
      </div>
    </div>
  );
};

export default Footer;
