import { Typography } from 'antd';
import Image from 'next/image';

export const NewsItem = ({
  src,
  title,
  description,
  link,
}: {
  src: string;
  title: string;
  description: string;
  link?: string;
}) => {
  return (
    <div className='news-item mx-3.5 mb-6'>
      <div className='img-posts'>
        <a href={link ?? '#'}>
          <Image
            className=' w-full h-[14rem] img-posts object-cover'
            alt='MEZU bài tin'
            src={src}
          />
        </a>
      </div>
      <div className='mt-4 text-left'>
        <h2 className='font-bold text-lg'>
          <a href={link ?? '#'}>{title}</a>
        </h2>
        <div className='divider my-2'></div>
        <Typography.Paragraph ellipsis={{ rows: 3, expandable: false }}>
          {description}
        </Typography.Paragraph>
      </div>
    </div>
  );
};
