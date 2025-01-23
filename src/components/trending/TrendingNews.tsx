import SectionTitle from '../global/SectionTitle';
import { trendingNewsList } from './data';
import NewsCard from './NewsCard';

function TrendingNews() {
  return (
    <div className="bg-placeholder p-6 max-lg:px-2">
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
  );
}
export default TrendingNews;
