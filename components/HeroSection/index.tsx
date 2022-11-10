import Image from 'next/image';
import background from 'public/images/home-background.png';
import appleStore from 'public/images/apple-store.png';
import playStore from 'public/images/play-store.png';
import appPreview from 'public/images/app-preview.png';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className='min-h-screen bg-gradient-to-br from-primary-lighter to-primary-darker relative'>
      <Image
        src={background}
        alt=''
      />
      <div className='absolute top-0 left-0 right-0 min-h-screen flex gap-4 justify-center items-center'>
        <div className='container max-w-screen-xl flex lg:flex-row flex-col items-center'>
          <div className='lg:w-1/2 w-full xl:px-0 px-4 lg:text-left text-center'>
            <h1 className='xl:text-[42px] md:text-3xl text-2xl text-white font-bold uppercase'>
              {`Cùng MEZU app, bạn có thể tạo các menu đồ ăn, uống cho quán một cách dễ dàng.`}
            </h1>
            <p className='lg:text-xl text-sm text-white'>
              {`Tăng tốc bán hàng ngay từ bây giờ.`}
            </p>
            <div className='flex mt-4 gap-8 lg:justify-start justify-center'>
              <Link href=''>
                <Image
                  className='w-auto h-10'
                  src={playStore}
                  alt=''
                />
              </Link>
              <Link href=''>
                <Image
                  className='w-auto h-10'
                  src={appleStore}
                  alt=''
                />
              </Link>
            </div>
            <p className='mt-4 lg:text-base text-xs text-white'>• {`Tải về ứng dụng MEZU miễn phí ngay`}</p>
          </div>
          <div className='lg:w-1/2 w-full xl:px-0 px-4'>
            <Image
              src={appPreview}
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;