import Container from '../Container';
import HeroNews from './HeroNews';
import TrendingNews from './TrendingNews';

function Trending() {
  return (
    <section className="rounded-md">
      <Container className="grid lg:grid-cols-2 py-4">
        <TrendingNews />
        <HeroNews />
      </Container>
    </section>
  );
}
export default Trending;
