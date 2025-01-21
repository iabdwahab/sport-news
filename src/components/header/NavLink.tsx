import { ReactNode } from 'react';

type propsType = {
  children: ReactNode;
  href?: string;
};

function NavLink({ children, href = '#' }: propsType) {
  return (
    <a href={href} className="capitalize text-black md:text-gray hover:text-[black] block py-2 md:py-0 lg:text-lg duration-150 ">
      {children}
    </a>
  );
}
export default NavLink;
