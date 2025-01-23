import { ReactNode } from 'react';

type propsType = {
  children: ReactNode;
  className?: string;
};

function Container({ children, className = '' }: propsType) {
  return <div className={`max-w-7xl mx-auto px-3 max-sm:px-1 ${className}`}>{children}</div>;
}
export default Container;
