import Container from '../Container';
import MainTitle from './MainTitle';
import NewsCard from './NewsCard';
import basketball from '/public/basketball.png';
function Main() {
  return (
    <main className="relative z-10 bg-[#F9FAFC]">
      <img src={basketball} alt="Basketball image" className="absolute -z-10 top-32 left-3 opacity-10 w-80" />
      <Container className="grid grid-cols-mainSection min-h-[calc(100vh-72px)] pt-10">
        <MainTitle />

        <div className="w-auto">
          <h3 className="bg-black text-white w-fit px-5 py-1 rounded-md ">Today</h3>
          <NewsCard title="Ethiopian runners took the top four spots." type="Race98" date="03 June 2023" imgURL="/public/ethiopianRunner.jpg" />
          <NewsCard title="IndyCar Detroit: Dixon quickest in second practice" type="INDYCAR" date="03 June 2023" imgURL="/public/racingCar.png" />
        </div>
      </Container>
    </main>
  );
}
export default Main;
