import Container from '../Container';
import TrendingNews from './TrendingNews';

function Trending() {
  return (
    <section className="rounded-md">
      <Container className="grid md:grid-cols-2 py-4">
        <TrendingNews />
        <div></div>
      </Container>
    </section>
  );
}
export default Trending;
