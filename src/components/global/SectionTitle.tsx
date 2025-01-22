import { ReactNode } from 'react';

type propsType = {
  children: ReactNode;
};

function SectionTitle({ children }: propsType) {
  return <h3 className="font-medium text-2xl">{children}</h3>;
}
export default SectionTitle;
