import trendingHero from '/public/imgs/trending/trending-hero.jpg';

function HeroNews() {
  return (
    <div className="relative z-10 bg-no-repeat bg-cover filter min-h-96 bg-center" style={{ backgroundImage: `url('${trendingHero}')` }}>
      <span className="absolute -z-10 w-full h-full bg-[#00000095]"></span>
      <div className="p-5 max-lg:px-3">
        <h5 className="text-white border-2 border-white px-4 py-1 w-fit rounded">Cycling</h5>
        <div className="absolute bottom-5 text-white">
          <h4 className="font-thin">Debits - 03 June 2023</h4>
          <h3 className="font-black md:text-5xl text-3xl">DISCOVER THE MEMBER BENEFITS OF USA CYCLING!</h3>
        </div>
      </div>
    </div>
  );
}
export default HeroNews;
