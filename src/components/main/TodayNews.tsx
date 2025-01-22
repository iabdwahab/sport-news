import NewsCard from './NewsCard';
import ethiopianRunner from '/public/imgs/main/ethiopian-runners.jpg';
import racingCar from '/public/imgs/main/racing-car.jpg';

function TodayNews() {
  return (
    <div className="max-lg:mt-5">
      <h3 className="bg-black text-white w-fit px-5 py-1 rounded-md ">Today</h3>
      <div className="grid grid-cols-auto300 gap-4">
        <NewsCard title="Ethiopian runners took the top four spots." type="Race98" date="03 June 2023" imgURL={ethiopianRunner} />
        <NewsCard title="IndyCar Detroit: Dixon quickest in second practice" type="INDYCAR" date="03 June 2023" imgURL={racingCar} />
      </div>
    </div>
  );
}
export default TodayNews;
