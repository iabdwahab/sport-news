import sliderFootball from '/public/imgs/slider/slider-football.png';
import sliderAmericanFootball from '/public/imgs/slider/slider-american-football.jpg';

export const sliderNews = [
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

export type sliderNewsObjectType = {
  imgURL: string;
  title: string;
  description: string;
  date: string;
  type: string;
};
