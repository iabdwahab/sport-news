type propsType = {
  title: string;
  type: string;
  date: string;
  imgURL: string;
};

function NewsCard({ title, type, date, imgURL }: propsType) {
  return (
    <div className={`mt-4 relative min-h-60 flex flex-col justify-end bg-no-repeat bg-cover rounded-lg overflow-hidden`} style={{ backgroundImage: `url('${imgURL}')` }}>
      <div className="p-3 bg-gradient-to-t from-[#F2F2F2] via-[#F2F2F2] h-28 flex flex-col justify-end rounded-lg">
        <h5 className="text-gray">
          {type} - {date}
        </h5>
        <h4 className="text-black text-xl font-bold">{title}</h4>
      </div>
    </div>
  );
}
export default NewsCard;
