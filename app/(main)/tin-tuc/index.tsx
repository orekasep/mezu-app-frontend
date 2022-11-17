import React from 'react';
import Image from 'next/image';
import background from 'public/images/home-background.png';
import styled from 'styled-components';

const Wrapper = styled.div``;

export default function Blog() {
  return (
    <Wrapper>
      <main className=''>
        <section className='h-[40vh] bg-gradient-to-br from-primary-lighter to-primary-darker relative'>
          <Image src={background} layout='fill' objectFit='cover' alt='' />
          <div className='absolute top-[50px] left-0 right-0 h-[40vh] flex gap-4 justify-center items-center'>
            <div className='container max-w-screen-xl flex flex-col items-center justify-center'>
              <h2 className='text-center text-2xl text-white'>
                Đăng ký sử dụng MEZU app miễn phí
              </h2>
            </div>
          </div>
        </section>
      </main>
    </Wrapper>
  );
}
