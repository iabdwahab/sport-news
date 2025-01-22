import Container from '../Container';
import SectionTitle from '../global/SectionTitle';
import RecentCard from './RecentCard';
import RecentHero from './RecentHero';

import recentTaekwondo from '/public/imgs/recent/recent-taekwondo.png';
import recentGolf from '/public/imgs/recent/recent-golf.png';
import recentCricket from '/public/imgs/recent/recent-cricket.png';
import arrowRight from '/public/imgs/global/arrow-right.svg';

function Recent() {
  const recentNews = [
    {
      imgURL: recentTaekwondo,
      date: '#Pollar. 87 - 12 July 2023',
      title: 'Baku 2023 Taekwondo Championships',
    },
    {
      imgURL: recentGolf,
      date: '#Goft. Toni - 20 July 2023',
      title: 'Open Championship Royal Liverpool Golf',
    },
    {
      imgURL: recentCricket,
      date: '#Cricket. Toni - 27 July 2023',
      title: 'Ireland Tour of England Test 2023',
    },
  ];

  return (
    <section>
      <Container>
        <SectionTitle>Recent News</SectionTitle>
        <div className="grid md:grid-cols-2 gap-4">
          <RecentHero />
          <div className="grid gap-3 bg-placeholder p-4 rounded-lg">
            {recentNews.map((recentItem, index) => (
              <RecentCard key={index} imgURL={recentItem.imgURL}>
                <RecentCard.Date>{recentItem.date}</RecentCard.Date>
                <RecentCard.Title>{recentItem.title}</RecentCard.Title>
              </RecentCard>
            ))}
            <a href="#" className="flex items-center gap-2 bg-gray text-white w-fit mx-auto px-4 py-1 rounded-md">
              More
              <img src={arrowRight} alt="Arrow" className="w-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default Recent;
