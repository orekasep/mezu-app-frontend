'use client';
import React from 'react';
import { googleSans } from '../(main)/fonts';
import '../globals.scss';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import 'antd/dist/antd.variable.min.css';
import { useHasScrolled } from 'hooks';

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
