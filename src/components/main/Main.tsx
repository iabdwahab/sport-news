import Container from '../Container';
import MainTitle from './MainTitle';
import TodayNews from './TodayNews';
import basketball from '/public/basketball.png';
import heroPlayer from '/public/heroPlayer.png';

function Main() {
  return (
    <main className="relative z-10 bg-[#F9FAFC]">
      <Container className="relative grid grid-cols-mainSection gap-2 min-h-[calc(100vh-72px)] pt-10">
        <img src={basketball} alt="Basketball image" className="absolute -z-10 top-32 -left-5 opacity-10 w-80" />
        <div className="relative">
          <MainTitle />
          <img src={heroPlayer} alt="Basketball Player" className="absolute top-0 right-0" />
          <div className="w-80 ml-auto mr-20 mt-4">
            <h4>The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals</h4>
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
