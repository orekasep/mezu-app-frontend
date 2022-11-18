'use client';

import { googleSans } from '../fonts';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import '../styles/globals.scss';
import '../styles/antd.variable.scss';
import 'antd/dist/antd.variable.min.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={googleSans.className}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
