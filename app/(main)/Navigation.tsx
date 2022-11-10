import { NavLink } from 'components';


export const Navigation = () => {
  return (
    <nav className='flex sm:flex-row flex-col items-center sm:gap-8 gap-0'>
      <ul className='flex sm:flex-row flex-col mb-0'>
        <NavLink href='/' title={`Sản phẩm`} />
        <NavLink href='/' title={`Hướng dẫn`} />
        <NavLink href='/' title={`Tin tức`} />
        <NavLink href='/' title={`Liên hệ`} />
      </ul>
      <button
        className={
          `text-base text-white font-bold w-[200px] sm:h-[60px] h-12 rounded-full
          bg-[#EA7298] hover:bg-[#FE7CA5] active:bg-[#DB6C8F] transition-all`
        }
      >
        {`Đăng ký miễn phí`}
      </button>
    </nav>
  );
};