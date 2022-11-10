import Link from 'next/link';

export const NavLink = ({
  title,
  href
}: {
  title: string;
  href?: string;
}) => {
  return (
    <Link href={href ?? ''}>
      <li
        className={
          `text-base sm:text-white text-neutral-800 font-bold lg:mx-8 mx-4 sm:my-0 my-2 relative py-2
          after:block after:absolute after:bottom-0 after:bg-white after:h-0.5 after:left-20 after:right-20
          after:transition-all after:duration-300
          hover:after:left-0 hover:after:right-0`
        }
      >
        {title}
      </li>
    </Link>
  );
};