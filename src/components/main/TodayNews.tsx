import NewsCard from './NewsCard';

function TodayNews() {
  return (
    <div>
      <h3 className="bg-black text-white w-fit px-5 py-1 rounded-md ">Today</h3>
      <NewsCard title="Ethiopian runners took the top four spots." type="Race98" date="03 June 2023" imgURL="/public/ethiopianRunner.jpg" />
      <NewsCard title="IndyCar Detroit: Dixon quickest in second practice" type="INDYCAR" date="03 June 2023" imgURL="/public/racingCar.png" />
    </div>
  );
}
export default TodayNews;
