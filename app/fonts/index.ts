import localFont from '@next/font/local';

export const googleSans = localFont({
  src: [
    {
      path: './GoogleSans-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './GoogleSans-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './GoogleSans-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './GoogleSans-Medium.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './GoogleSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './GoogleSans-BoldItalic.ttf',
      weight: '700',
      style: 'italic'
    }
  ]
});

export default googleSans;