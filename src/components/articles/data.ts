import basketball from '/public/imgs/articles/articles-basketball.png';
import hookey from '/public/imgs/articles/articles-hookey.png';
import badminton from '/public/imgs/articles/articles-badminton.png';
import jake from '/public/imgs/articles/articles-jake.png';
import foxi from '/public/imgs/articles/articles-foxi.png';
import bong from '/public/imgs/articles/articles-bong.png';

export type articleType = {
  imgURL: string;
  author: {
    name: string;
    imgURL: string;
  };
  sport: string;
  date: string;
  title: string;
  description: string;
};

export const articlesList: articleType[] = [
  {
    imgURL: basketball,
    author: {
      name: 'Jake Will',
      imgURL: jake,
    },
    sport: 'basketball',
    date: '04 June 2023',
    title: '5 Exercises Basketball Players Should Be Using To Develop Strength',
    description: 'This article was written by Jake Willhoite from Healthlisted.com Strength in basketball isn’t all about a massive body mass or ripped muscles.',
  },
  {
    imgURL: hookey,
    author: {
      name: 'Foxi Zacon',
      imgURL: foxi,
    },
    sport: 'hookey',
    date: '03 June 2023',
    title: "Golden Knights out to fulfill owner's quest to win Stanley Cup in 6th year",
    description: 'The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.',
  },
  {
    imgURL: badminton,
    author: {
      name: 'Bong Lozada',
      imgURL: bong,
    },
    sport: 'badminton',
    date: '10 June 2023',
    title: '‘Outdoor’ Badminton Gets Support From Local Federation',
    description: 'The Badminton World Federation is developing Air Badminton and the country’s governing body, Philippine Badminton Association.',
  },
];
