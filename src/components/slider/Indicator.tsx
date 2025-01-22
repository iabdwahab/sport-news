import { sliderNewsObjectType } from './data';

type propsType = {
  sliderNews: sliderNewsObjectType[];
  slideNumber: number;
};

function Indicator({ sliderNews, slideNumber }: propsType) {
  return (
    <div className="flex gap-2">
      {[...Array(sliderNews.length)].map((item, index) => (
        <span key={index} className={`flex justify-center items-center ${index == slideNumber ? 'bg-black text-white' : ''} w-9 aspect-square font-medium text-lg  rounded-full`}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
export default Indicator;
