'use client';
import React from 'react';
import { googleSans } from '../fonts';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useHasScrolled } from 'hooks';

import '../styles/globals.scss';
import '../styles/antd.variable.scss';
import 'antd/dist/antd.variable.min.css';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scroll = useHasScrolled(10);

  return (
    <html lang='en'>
      <body className={googleSans.className}>
        <Header transparent={!scroll} />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
