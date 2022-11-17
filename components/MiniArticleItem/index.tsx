'use client';

import { ArticleProps } from 'common/EntityProps';
import { Typography } from 'antd';
export const MiniArticleItem = ({ article }: { article: ArticleProps }) => {
  return (
    <>
      <div className='item flex flex-row mb-4'>
        <img
          src={
            article.attributes.ThumbnailUrl ??
            article.attributes.Thumbnail.data.attributes?.url ??
            ''
          }
          alt=''
          className='w-[60px] h-[60px] object-cover'
        />
        <Typography.Paragraph
          className='ml-2 color-primary'
          ellipsis={{ rows: 3, expandable: false }}
        >
          <a href={`/tin-tuc/${article.attributes.Slug}`}>
            {article.attributes.Title}
          </a>
        </Typography.Paragraph>
      </div>
      <hr className='my-4' />
    </>
  );
};
