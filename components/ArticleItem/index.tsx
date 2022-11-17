'use client';

import { ArticleItemProps } from 'common';
import styled from 'styled-components';
import { Typography } from 'antd';

const ArticleItemWrapper = styled.div`
  img.thumbnail {
    transition: 0.3s all;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ArticleItem = (props: ArticleItemProps) => {
  return (
    <ArticleItemWrapper className='p-4 mt-4'>
      <img
        src={props.url}
        alt='Article image'
        className='thumbnail w-full h-[250px] object-cover rounded-2xl'
      />
      <h3 className='font-bold text-xl py-4 m-0 color-primary'>
        {props.title}
      </h3>
      <Typography.Paragraph
        style={{ overflowWrap: 'anywhere' }}
        className='font-normal color-primary'
        ellipsis={{ rows: 3, expandable: false }}
      >
        {props.description}
      </Typography.Paragraph>
    </ArticleItemWrapper>
  );
};

export default ArticleItem;
