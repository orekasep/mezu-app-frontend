'use client';

import contactHero from 'public/images/contact/hero.png';
import Image from 'next/image';
import styled from 'styled-components';
import background from 'public/images/home-background.png';
import Link from 'next/link';

const ContactWrapper = styled.div`
  .hero-gradient {
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0)
    );
  }
`;

export default function Contact() {
  return (
    <ContactWrapper>
      <main className='min-h-screen'>
        <section className='hero'>
          <div className='relative h-[40vh]'>
            <Image
              src={contactHero}
              layout='fill'
              objectFit='cover'
              alt='MEZU Contact Hero'
            />
            <div className='relative h-[40vh] hero-gradient'></div>
          </div>
        </section>
        <section className='content'>
          <div className='container flex lg:flex-row flex-col mt-10 mx-auto p-8 bg-slate-100'>
            <div className='flex-1 m-5'>
              <h2 className='text-xl font-bold color-primary'>
                Hãy trò chuyện với chúng tôi ngay hôm nay để cùng tăng tốc bán
                hàng cho quán của bạn.
              </h2>
            </div>
            <div className='relative m-5 flex-1 h-auto bg-gradient-to-r from-primary-light to-primary-dark'>
              <Image src={background} layout='fill' objectFit='cover' alt='' />
              <div className='absolute w-full text-center top-0 p-8'>
                <h2 className='w-3/4 mx-auto text-xl font-bold text-white'>
                  MENU APP - TẠO MENU ĐỒ ĂN UỐNG GỌI MÓN VÀ QUẢN LÝ QUÁN MIỄN
                  PHÍ
                </h2>
                <p className='text-white w-3/4 mx-auto my-6'>
                  Với các tính năng gọi món nhanh chóng thuận tiện, MEZU app sẽ
                  giúp quán đạt điểm 10 trong mắt khách hàng. Đừng chần chừ nữa,
                  hãy trải nghiệm ngay.
                </p>
                <button
                  className={`text-base font-bold w-[200px] sm:h-[60px] h-12 rounded-full
          bg-[#ffffff] hover:bg-[#FE7CA5] active:bg-[#FE7CA5] transition-all`}
                >
                  <Link
                    passHref
                    href={'/dang-ky'}
                    className='text-primary hover:text-white hover:text-black'
                  >{`Đăng ký miễn phí`}</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ContactWrapper>
  );
}
