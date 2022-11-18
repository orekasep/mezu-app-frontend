import React from 'react';
import Image from 'next/image';
import { Endpoints, Settings } from 'common';
import { ArticleResponseProps } from 'common/EntityProps';
import { stringify } from 'qs';
import ArticleBody from 'components/ArticleBody';
import background from 'public/images/home-background.png';
import { MiniArticleItem } from 'components/MiniArticleItem';

export default async function Blog({ params }: { params: { slug: string } }) {
  const { data: articles } = await getArticle(params.slug);
  const article = articles?.[0];
  const { data: latestArticles } = await getLatestArticles();

  return (
    <div>
      <main className=''>
        <section className='h-[40vh] bg-gradient-to-br from-primary-lighter to-primary-darker relative'>
          <Image src={background} layout='fill' objectFit='cover' alt='' />
          <div className='absolute top-[50px] left-0 right-0 h-[40vh] flex gap-4 justify-center items-center'>
            <div className='container max-w-screen-xl flex flex-col items-center justify-center'>
              <h2 className='text-center text-2xl text-white'>
                {article?.attributes.Title}
              </h2>
              <div className='divider' />
            </div>
          </div>
        </section>
        <section className='articles'>
          <div className='container mx-auto max-w-screen-xl flex flex-row p-8'>
            <div className='w-4/5 pr-6 my-10'>
              <ArticleBody article={article} />
            </div>
            <div className='w-1/5 xl:border-l-[1px] xl:border-slate-200 pl-6'>
              <h2 className='mt-10 mb-0 color-primary text-xl'>
                BÀI VIẾT MỚI NHẤT
              </h2>
              <div className='divider' />
              <div className='mt-4'>
                {latestArticles?.map((article) => (
                  <MiniArticleItem key={article.id} article={article} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

async function getLatestArticles(): Promise<ArticleResponseProps> {
  const params: string = stringify({
    pagination: {
      pageSize: Settings.MAX_LATEST_BLOG,
    },
    sort: ['PublishedDate:desc'],
    fields: ['Slug', 'Title', 'ThumbnailUrl'],
    populate: {
      Thumbnail: {
        fields: ['url'],
      },
    },
  });
  const res = await fetch(`${Endpoints.ARTICLES}?${params}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<ArticleResponseProps>;
}

async function getArticle(slug: string): Promise<ArticleResponseProps> {
  const params: string = stringify({
    filters: {
      Slug: {
        $eq: slug,
      },
    },
    populate: {
      Thumbnail: {
        fields: ['url'],
      },
    },
  });
  const res = await fetch(`${Endpoints.ARTICLES}?${params}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<ArticleResponseProps>;
}
