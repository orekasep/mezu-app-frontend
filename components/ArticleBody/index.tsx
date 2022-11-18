'use client';

import { ArticleProps } from 'common';
import parse from 'html-react-parser';

const ArticleBody = ({ article }: { article?: ArticleProps }) => {
  return <>{parse(article?.attributes.Content ?? '')}</>;
};

export default ArticleBody;
