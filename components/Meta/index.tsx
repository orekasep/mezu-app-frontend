import Head from 'next/head';
import Descriptor from './descriptor';

interface IMetaProps {
  title: string;
  description: string;
  canonical?: string;
  images?: any;
  descriptor?: any;
}

const Meta = (props: IMetaProps) => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' key='charset' />
        <meta
          name='viewport'
          content='width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no, user-scalable=0, maximum-scale=1'
          key='viewport'
        />
        <link
          rel='apple-touch-icon'
          href={`/assets/apple-touch-icon.png`}
          key='apple'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href={`/assets/favicon-32x32.png`}
          key='icon32'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href={`/assets/favicon-16x16.png`}
          key='icon16'
        />
        <link rel='icon' href={`/assets/favicon.ico`} key='favicon' />
        <link rel='dns-prefetch' href='//cdnjs.cloudflare.com' />
        <link rel='dns-prefetch' href='//www.google.com' />
      </Head>
    </>
  );
};

export { Meta };
