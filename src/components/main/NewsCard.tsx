import racingCar from '/public/racingCar.png';

function NewsCard() {
  return (
    <div className={`mt-4 relative min-h-60 flex flex-col justify-end bg-[url('${racingCar}')] bg-no-repeat bg-cover rounded-lg overflow-hidden`}>
      <div className="p-3 bg-gradient-to-t from-[#F2F2F2] via-[#F2F2F2] h-28 flex flex-col justify-end">
        <h5 className="text-placeholder">INDYCAR - 03 June 2023</h5>
        <h4 className="text-black text-lg">IndyCar Detroit: Dixon quickest in second practice</h4>
      </div>
    </div>
  );
}
export default NewsCard;
