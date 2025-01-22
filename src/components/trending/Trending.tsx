import Container from '../Container';
import TrendingNews from './TrendingNews';

import trendingHero from '/public/trending-hero.jpg';

function Trending() {
  return (
    <section className="rounded-md">
      <Container className="grid md:grid-cols-2 py-4">
        <TrendingNews />
        <div className="relative z-10 bg-no-repeat bg-cover filter" style={{ backgroundImage: `url('${trendingHero}')` }}>
          <span className="absolute -z-10 w-full h-full bg-[#00000095]"></span>
          <div className="p-5 ">
            <h5 className="text-white border-2 border-white px-4 py-1 w-fit rounded">Cycling</h5>
            <div className="absolute bottom-5 text-white">
              <h4 className="font-thin">Debits - 03 June 2023</h4>
              <h3 className="font-black text-5xl">DISCOVER THE MEMBER BENEFITS OF USA CYCLING!</h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default Trending;
