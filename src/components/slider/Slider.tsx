import { useState } from 'react';
import Container from '../Container';
import sliderFootball from '/public/slider-football.png';
import sliderAmericanFootball from '/public/slider-american-football.jpg';

function Slider() {
  const [slideNumber, setSlideNumber] = useState(1);

  const data = [
    {
      imgURL: sliderFootball,
      title: 'Lionel Messi Leaving Ligue 1 Team Paris Saint-Germain, Club Confirms',
      description: 'The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals',
      date: 'Agence France-Presse - 04 June 2023',
      type: 'Football',
    },
    {
      imgURL: sliderAmericanFootball,
      title: 'NFL selects veteran referee Ron Torbert to lead officiating crew for Super Bowl LIX',
      description: "Though the participants for Super Bowl LIX in New Orleans won't be decided until Sunday, the officials were announced by the NFL on Tuesday.",
      date: 'American Football - 21 Jan 2025',
      type: 'American Football',
    },
    {
      imgURL: sliderFootball,
      title: 'Lionel Messi Leaving Ligue 1 Team Paris Saint-Germain, Club Confirms',
      description: 'The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals',
      date: 'Agence France-Presse - 04 June 2023',
      type: 'Football',
    },
    {
      imgURL: sliderAmericanFootball,
      title: 'NFL selects veteran referee Ron Torbert to lead officiating crew for Super Bowl LIX',
      description: "Though the participants for Super Bowl LIX in New Orleans won't be decided until Sunday, the officials were announced by the NFL on Tuesday.",
      date: 'American Football - 21 Jan 2025',
      type: 'American Football',
    },
  ];

  return (
    <div>
      <Container className="py-4">
        <div className="relative z-50 min-h-96 bg-no-repeat bg-cover bg-center p-4 text-white" style={{ backgroundImage: `url('${data[slideNumber].imgURL}')` }}>
          <span className="absolute w-full h-full top-0 left-0 bg-[#00000095] -z-10"></span>
          <h3 className="text-white border py-2 px-4 rounded-md w-fit">{data[slideNumber].type}</h3>
          <div className="absolute bottom-4 max-w-3xl">
            <h5 className="max-md:text-sm">{data[slideNumber].date}</h5>
            <h4 className="font-bold text-2xl md:text-4xl">{data[slideNumber].title}</h4>
            <h5 className="max-md:text-sm">{data[slideNumber].description}</h5>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Slider;
