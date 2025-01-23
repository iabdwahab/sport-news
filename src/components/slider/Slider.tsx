import { useState } from 'react';
import Container from '../Container';

import arrowLeft from '/public/imgs/global/arrow-left.svg';
import arrowRight from '/public/imgs/global/arrow-right.svg';
import ControlButton from './ControlButton';
import { sliderNews } from './data';
import Indicator from './Indicator';

function Slider() {
  const [slideNumber, setSlideNumber] = useState(0);

  function goBack() {
    setSlideNumber((prevValue) => (prevValue > 0 ? prevValue - 1 : prevValue));
  }

  function goNext() {
    setSlideNumber((prevValue) => (prevValue < sliderNews.length - 1 ? prevValue + 1 : prevValue));
  }

  return (
    <div>
      <Container className="max-lg:px-0">
        <div className="bg-placeholder">
          <div className="relative z-50 min-h-96 bg-no-repeat bg-cover maxlg:bg-center p-4 text-white" style={{ backgroundImage: `url('${sliderNews[slideNumber].imgURL}')` }}>
            <span className="absolute w-full h-full top-0 left-0 bg-[#00000095] -z-10"></span>
            <h3 className="text-white border py-2 px-4 rounded-md w-fit">{sliderNews[slideNumber].type}</h3>
            <div className="absolute bottom-4 max-w-3xl">
              <h5 className="max-md:text-sm">{sliderNews[slideNumber].date}</h5>
              <h4 className="font-bold text-2xl md:text-4xl">{sliderNews[slideNumber].title}</h4>
              <h5 className="max-md:text-sm">{sliderNews[slideNumber].description}</h5>
            </div>
          </div>
          <div className="w-fit ml-auto px-4 flex items-center max-md:mx-auto gap-6 py-4 mb-8">
            <ControlButton imgURL={arrowLeft} onClick={goBack} disabled={slideNumber <= 0} />
            <Indicator sliderNews={sliderNews} slideNumber={slideNumber} />
            <ControlButton imgURL={arrowRight} onClick={goNext} disabled={slideNumber >= sliderNews.length - 1} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Slider;
