import { NavLink } from 'components';
import Link from 'next/link';
export const Navigation = () => {
  return (
    <nav className='flex sm:flex-row flex-col items-center sm:gap-8 gap-0'>
      <ul className='flex sm:flex-row flex-col mb-0'>
        <NavLink href='/' title={`Trang chủ`} />
        <NavLink href='/huong-dan-su-dung' title={`Hướng dẫn`} />
        <NavLink href='/tin-tuc' title={`Tin tức`} />
        <NavLink href='/lien-he' title={`Liên hệ`} />
      </ul>
      <button
        className={`text-base text-white font-bold w-[200px] sm:h-[60px] h-12 rounded-full
          bg-[#EA7298] hover:bg-[#FE7CA5] active:bg-[#DB6C8F] transition-all`}
      >
        <Link
          passHref
          href={'/dang-ky-mien-phi'}
          className='text-white hover:text-black'
        >{`Đăng ký miễn phí`}</Link>
      </button>
    </nav>
  );
};
