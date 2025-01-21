import { ReactNode } from 'react';

type propsType = {
  children: ReactNode;
  href?: string;
};

function NavLink({ children, href = '#' }: propsType) {
  return (
    <a href={href} className="capitalize text-gray hover:text-[black] text-lg duration-150 ">
      {children}
    </a>
  );
}
export default NavLink;
