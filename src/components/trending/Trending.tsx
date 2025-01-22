import Container from '../Container';
import SectionTitle from '../global/SectionTitle';
import NewsCard from './NewsCard';

import trendingHorse from '/public/trending-horse.png';
import trendingCycle from '/public/trending-cycle.png';
import trendingWrestling from '/public/trending-wrestling.png';

function Trending() {
  const trendingNewsList = [
    {
      imgURL: trendingHorse,
      date: 'Race 98 - 03 June 2023',
      title: '6-Year-Old Horse Dies at Belmont Park After Race Injury',
      description: 'NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week’s',
    },
    {
      imgURL: trendingCycle,
      date: 'Jony.Ls - 03 June 2023',
      title: 'Savilia Blunk Embraces Longer Season with World Cup',
      description: 'Last year, Savilia Blunk took a more conservative approach to her first season as an Elite Class athlete, skipping some',
    },
    {
      imgURL: trendingWrestling,
      date: 'King.F - 03 June 2023',
      title: 'Ryan Garcia is fighting again, this time on social media',
      description: 'Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on',
    },
  ];

  return (
    <section className="rounded-md">
      <Container className="grid md:grid-cols-2 py-4">
        <div className="bg-placeholder p-6">
          <SectionTitle>Trending News</SectionTitle>
          <div className="mt-4 grid gap-4">
            {trendingNewsList.map((news, index) => (
              <NewsCard key={index} imgURL={news.imgURL}>
                <NewsCard.Date>{news.date}</NewsCard.Date>
                <NewsCard.Title>{news.title}</NewsCard.Title>
                <NewsCard.Description>{news.description}</NewsCard.Description>
              </NewsCard>
            ))}
          </div>
        </div>
        <div></div>
      </Container>
    </section>
  );
}
export default Trending;
