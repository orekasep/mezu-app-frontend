import { ArticleProps } from 'common/EntityProps';
import { Typography } from 'antd';
import Image from 'next/image';

export const MiniArticleItem = ({ item }: { item: ArticleProps }) => {
  const thumbnail = item.attributes.Thumbnail;
  return (
    <>
      <div className='item flex flex-row mb-4'>
        <Image
          src={thumbnail.data.attributes.url}
          alt=''
          className='w-[60px] h-[60px] object-cover'
        />
        <Typography.Paragraph
          className='ml-2 text-lg'
          ellipsis={{ rows: 3, expandable: false }}
        >
          <a href={`/tin-tuc/${item.attributes.Slug}`}>
            {item.attributes.Title}
          </a>
        </Typography.Paragraph>
      </div>
      <hr className='my-4' />
    </>
  );
};
