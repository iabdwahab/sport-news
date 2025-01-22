import Container from '../Container';
import SectionTitle from '../global/SectionTitle';
import ArticleCard from './ArticleCard';
import { articlesList } from './data';

function Articles() {
  return (
    <div>
      <Container className="py-4">
        <SectionTitle>Sports Articles</SectionTitle>
        <div className="grid grid-cols-auto300 gap-4">
          {articlesList.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </Container>
    </div>
  );
}
export default Articles;
