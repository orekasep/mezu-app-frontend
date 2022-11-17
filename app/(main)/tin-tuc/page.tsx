import React from 'react';
import Image from 'next/image';
import { Endpoints, Settings } from 'common';

import background from 'public/images/home-background.png';
import { ArticleProps } from 'common/EntityProps';
import { stringify } from 'qs';

export default async function Blog() {
  const articles: [ArticleProps?] = (await getArticles()) as [ArticleProps];
  console.log(articles);

  return (
    <div>
      <main className=''>
        <section className='h-[40vh] bg-gradient-to-br from-primary-lighter to-primary-darker relative'>
          <Image src={background} layout='fill' objectFit='cover' alt='' />
          <div className='absolute top-[50px] left-0 right-0 h-[40vh] flex gap-4 justify-center items-center'>
            <div className='container max-w-screen-xl flex flex-col items-center justify-center'>
              <h2 className='text-center text-2xl text-white'>
                Tin tức và kiến thức từ MEZU app
              </h2>
            </div>
          </div>
        </section>
        <section className='articles'>
          <div className='container max-w-screen-xl flex flex-row'>
            <div className='flex-4'></div>
            <div className='flex-1'></div>
          </div>
        </section>
      </main>
    </div>
  );
}

async function getArticles() {
  const params: string = stringify({
    pagination: {
      pageSize: Settings.MAX_CATEGORY_BLOG,
    },
    sort: ['PublishedDate:desc'],
    fields: ['Slug', 'Title', 'PublishedDate', 'Description'],
    populate: {
      Thumbnail: {
        fields: ['url'],
      },
    },
  });
  const res = await fetch(`${Endpoints.ARTICLES}?${params}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
