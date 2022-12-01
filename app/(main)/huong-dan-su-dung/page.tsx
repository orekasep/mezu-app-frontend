/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import background from 'public/images/home-background.png';
import featureBg from 'public/images/kb/feature-bg.png';
import featurePhone from 'public/images/kb/feature-phone.png';
import globeIcon from 'public/images/kb/globe-outline.png';
import settingIcon from 'public/images/kb/setting-outline.png';
import mezuIcon from 'public/images/kb/mezu-outline.png';
import chartIcon from 'public/images/kb/chart-outline.png';
import appleStore from 'public/images/apple-store.png';
import playStore from 'public/images/play-store.png';
import { ArticleSection } from 'components';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import parse from 'html-react-parser';

const searchClient = instantMeiliSearch(
  process.env.NEXT_PUBLIC_MEILISEARCH_URL ?? '',
  process.env.NEXT_PUBLIC_MEILISEARCH_DEFAULT_KEY ?? ''
);

interface FeatureItemProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

const FeatureItem = (props: FeatureItemProps) => {
  return (
    <div className='lg:w-2/3 w-full mx-auto bg-white flex flex-row mt-8 items-center rounded-lg shadow-md'>
      <div className='pl-6 pr-4'>
        <Image
          width={32}
          height={32}
          src={props.icon}
          layout='instrict'
          alt='Tổng quan về MEZU app'
        />
      </div>
      <div className='py-4'>
        <h2 className='m-0 color-primary'>{props.title}</h2>
        <p className='m-0 color-primary'>{props.description}</p>
      </div>
    </div>
  );
};

const features = [
  {
    icon: globeIcon,
    title: 'Tổng quan về MEZU app',
    description: 'Giới thiệu các chức năng của MEZU app',
  },
  {
    icon: settingIcon,
    title: 'Hướng dẫn cài đặt cơ bản',
    description: 'Tạo bàn, quản lý danh mục, sản phẩm',
  },
  {
    icon: mezuIcon,
    title: 'Menu, gọi món, thanh toán',
    description: 'Đặt & chốt món ăn cho từng bàn, thanh toán',
  },
  {
    icon: chartIcon,
    title: 'Báo cáo, phân tích',
    description: 'Doanh thu quán theo ngày, tuần, các món ăn',
  },
];

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const Hit = ({ hit }: { hit: any }) => {
  const { _highlightResult } = hit;
  console.log('_highlightResult', _highlightResult);
  return (
    <div key={hit.id} className='py-2 px-2 hover:bg-slate-100'>
      {parse(_highlightResult ? _highlightResult?.Title?.value : '')}
    </div>
  );
};

export default function KnowledgeBase() {
  return (
    <div>
      <main className=''>
        <section className='h-[40vh] bg-gradient-to-br from-primary-lighter to-primary-darker relative'>
          <Image src={background} layout='fill' objectFit='cover' alt='' />
          <div className='absolute top-[50px] left-0 right-0 h-[40vh] flex gap-4 justify-center items-center'>
            <div className='container max-w-screen-xl flex flex-col items-center justify-center px-4'>
              <h2 className='text-center text-2xl text-white'>
                Chào mừng bạn đến với trang hướng dẫn của MEZU app
              </h2>
              <div className='lg:w-1/2 w-full mx-auto'>
                <div className='relative'>
                  <InstantSearch
                    indexName='mezu-kb'
                    searchClient={searchClient}
                  >
                    <SearchBox searchAsYouType showLoadingIndicator />
                    <Hits hitComponent={Hit} />
                  </InstantSearch>
                </div>
              </div>
              <p className='my-5 text-white'>
                Nội dung phổ biến: Giới thiệu, tạo sản phẩm, thêm bàn, thêm danh
                mục đồ, sửa đơn hàng …
              </p>
            </div>
          </div>
        </section>
        <section className='features bg-slate-100'>
          <div className='container lg:w-2/3 w-full mx-auto lg:grid lg:grid-rows-2 lg:grid-flow-col lg:pt-[60px] lg:pb-[120px] p-4'>
            {features.map((feature) => (
              <FeatureItem key={feature.title} {...feature} />
            ))}
          </div>
        </section>
        <section className='download relative'>
          <div className='absolute top-0 left-0 right-0 bottom-0'>
            <Image
              src={featureBg}
              layout='fill'
              objectFit='cover'
              alt='Tải ứng dụng MEZU miễn phí '
            />
          </div>
          <div className='relative z-1'>
            <div className='container max-w-screen-xl mx-auto flex lg:flex-row flex-col lg:px-10 px-4'>
              <div className='flex-1 color-primary my-[80px]'>
                <h2 className='text-3xl color-primary font-bold lg:text-left text-center'>
                  Tải ứng dụng MEZU miễn phí
                </h2>
                <p className='text-lg lg:text-left text-center'>
                  Xem menu, gọi món, quản lý quán với nhiều tính năng ưu việt.{' '}
                  <br className='lg:inline hidden' />
                  Hãy trải nghiệm ứng dụng miễn phí MEZU app
                </p>
                <div className='flex mt-4 gap-8 lg:justify-start justify-center'>
                  <Link href=''>
                    <Image className='w-auto h-10' src={playStore} alt='' />
                  </Link>
                  <Link href=''>
                    <Image className='w-auto h-10' src={appleStore} alt='' />
                  </Link>
                </div>
              </div>
              <div className='flex-1 relative'>
                <div className='lg:absolute lg:w-2/3 h-[400px] top-[-80px]'>
                  <Image
                    src={featurePhone}
                    alt='Tải ứng dụng MEZU miễn phí'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <ArticleSection />
      </main>
    </div>
  );
}
