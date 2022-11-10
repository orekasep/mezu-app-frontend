'use client'

import Link from 'next/link'
import MezuLogo from 'public/logos/logo-white.svg'
import { Navigation } from './Navigation'

export const Header = () => {
  return (
    <header className='fixed top-0 bg-gradient-to-r from-primary-light to-primary-dark h-[100px] w-full z-50'>
      <div className='container max-w-screen-xl mx-auto h-full flex justify-between items-center'>
        <Link href='/'>
          <MezuLogo />
        </Link>
        <Navigation />
      </div>
    </header>
  )
}

export default Header