import { ReactNode } from 'react';

type propsType = {
  children: ReactNode;
  imgURL: string;
};

function NewsCard({ children, imgURL }: propsType) {
  return (
    <div className="grid lg:grid-cols-[250px,1fr] gap-4">
      <div>
        <img src={imgURL} alt="News Image" className="w-full h-full object-cover" />
      </div>
      <div className="relative">
        {children}
        <hr className="bg-[#B8C2CE] my-2 border-none h-[1px] block absolute max-lg:relative -bottom-3 w-full" />
      </div>
    </div>
  );
}

NewsCard.Date = ({ children }: { children: ReactNode }) => {
  return <h5 className="text-gray text-sm">{children}</h5>;
};
NewsCard.Title = ({ children }: { children: ReactNode }) => {
  return <h3 className="font-medium text-xl">{children}</h3>;
};
NewsCard.Description = ({ children }: { children: ReactNode }) => {
  return <h4 className="text-gray text-sm">{children}</h4>;
};

export default NewsCard;
