'use client';

import { googleSans } from '../(main)/fonts';
import '../globals.scss';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import 'antd/dist/antd.variable.min.css';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={googleSans.className}>
        <Header transparent />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
