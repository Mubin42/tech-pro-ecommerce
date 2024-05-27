import React, { FC } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  // api

  // hooks

  // states

  // variables

  // styles

  // functions

  // effects

  // components

  return (
    <div className=' h-screen'>
      <Navbar />
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
