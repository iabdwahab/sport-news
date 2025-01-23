import Container from '../Container';
import MainTitle from './MainTitle';
import TodayNews from './TodayNews';
import basketball from '/public/imgs/main/basketball.png';
import heroPlayer from '/public/imgs/main/hero-player.png';

function Main() {
  return (
    <main className="relative z-10">
      <Container className="relative grid lg:grid-cols-mainSection gap-2 md:pt-10">
        <img src={basketball} alt="Basketball image" className="absolute -z-10 top-32 -left-5 opacity-10 w-80 max-md:hiden" />
        <div className="relative max-lg:min-h-[calc(100vh-72px)] max-lg:grid max-lg:content-center max-lg:gap-8">
          <MainTitle />
          <img src={heroPlayer} alt="Basketball Player" className="absolute md:top-0 right-0 max-lg:hidden" />
          <div className="lg:mt-14 lg:w-80 lg:ml-auto lg:mr-20 max-lg:text-center">
            <h4 className="max-lg:text-xl max-w-[400px] mx-auto">The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals</h4>
            <a href="#" className="inline-block mt-5 uppercase bg-[#262626] text-white tracking-widest	 px-4 py-3 rounded-md">
              continue reading
            </a>
          </div>
        </div>
        <TodayNews />
      </Container>
    </main>
  );
}
export default Main;
