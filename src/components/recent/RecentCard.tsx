import { ReactNode } from 'react';

type propsType = {
  imgURL: string;
  children: ReactNode;
};

function RecentCard({ imgURL, children }: propsType) {
  return (
    <div className="grid grid-cols-[80px,1fr] gap-2">
      <div>
        <img src={imgURL} alt="Image" className="w-full" />
      </div>
      <div>{children}</div>
    </div>
  );
}

RecentCard.Date = function ({ children }: { children: ReactNode }) {
  return <h5 className="text-gray text-sm">{children}</h5>;
};
RecentCard.Title = function ({ children }: { children: ReactNode }) {
  return <h4 className="font-medium text-md">{children}</h4>;
};
export default RecentCard;
