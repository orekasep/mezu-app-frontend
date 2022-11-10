import { NavLink } from 'components'


export const Navigation = () => {
  return (
    <nav className='flex items-center gap-8'>
      <ul className='flex'>
        <NavLink href='/' title={`Sản phẩm`} />
        <NavLink href='/' title={`Hướng dẫn`} />
        <NavLink href='/' title={`Tin tức`} />
        <NavLink href='/' title={`Liên hệ`} />
      </ul>
      <button
        className={
          `text-base text-white font-bold w-[200px] h-[60px] rounded-full
          bg-[#EA7298] hover:bg-[#FE7CA5] active:bg-[#DB6C8F] transition-all`
        }
      >
        {`Đăng ký miễn phí`}
      </button>
    </nav>
  )
}