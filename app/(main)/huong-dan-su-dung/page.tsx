'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import background from 'public/images/home-background.png';
import { AutoComplete, Input } from 'antd';
import type { SelectProps } from 'antd/es/select';
import styled from 'styled-components';

const { Search } = Input;

const getRandomInt = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

const Wrapper = styled.div`
  .ant-input-search {
    .ant-input {
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
    }
  }

  .ant-input-search > .ant-input-group > .ant-input-group-addon:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  .ant-input-search
    > .ant-input-group
    > .ant-input-group-addon:last-child
    .ant-input-search-button {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-right-width: 0;
  }
`;

export default function KnowledgeBase() {
  const [options, setOptions] = useState<SelectProps<object>['options']>([]);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };

  return (
    <Wrapper>
      <main className=''>
        <section className='h-[40vh] bg-gradient-to-br from-primary-lighter to-primary-darker relative'>
          <Image src={background} layout='fill' objectFit='cover' alt='' />
          <div className='absolute top-[50px] left-0 right-0 h-[40vh] flex gap-4 justify-center items-center'>
            <div className='container max-w-screen-xl flex flex-col items-center justify-center'>
              <h2 className='text-center text-2xl text-white'>
                Chào mừng bạn đến với trang hướng dẫn của MEZU app
              </h2>
              <div className='w-1/2 mx-auto'>
                <AutoComplete
                  dropdownMatchSelectWidth={252}
                  style={{ width: '100%' }}
                  options={options}
                  onSelect={onSelect}
                  onSearch={handleSearch}
                >
                  <Search placeholder='Nhập nội dung bạn cần tìm' enterButton />
                </AutoComplete>
              </div>
              <p className='my-5 text-white'>
                Nội dung phổ biến: Giới thiệu, tạo sản phẩm, thêm bàn, thêm danh
                mục đồ, sửa đơn hàng …
              </p>
            </div>
          </div>
        </section>
      </main>
    </Wrapper>
  );
}
