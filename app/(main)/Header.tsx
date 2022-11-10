'use client';

import Link from 'next/link';
import MezuLogo from 'public/logos/logo-white.svg';
import { Navigation } from './Navigation';
import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='fixed top-0 bg-gradient-to-r from-primary-light to-primary-dark sm:h-[100px] h-16 w-full z-50'>
      <div className='container max-w-screen-xl xl:px-0 px-4 mx-auto h-full flex justify-between items-center'>
        <Link href='/'>
          <MezuLogo className='sm:text-6xl text-4xl' />
        </Link>
        <div className='sm:block hidden'>
          <Navigation />
        </div>
        <div
          className='sm:hidden block p-2 text-2xl text-white'
          onClick={() => setOpen(true)}
        >
          <MenuOutlined />
        </div>
      </div>
      <Drawer
        placement='right'
        width={240}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Navigation />
      </Drawer>
    </div>
  );
};

export default Header;