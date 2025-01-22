type prposType = {
  title: string;
  imgURL: string;
  titleTop: boolean;
};

function Category({ title, imgURL, titleTop }: prposType) {
  return (
    <div>
      {!titleTop ? (
        <>
          <div className="bg-[#eee] rounded-md">
            <h4 className="gradient-text font-black text-4xl text-center uppercase flex justify-center items-center py-4">{title}</h4>
          </div>
          <img src={imgURL} alt="Category Image" className="w-full h-72 object-cover mt-5 rounded-md" />
        </>
      ) : (
        <>
          <img src={imgURL} alt="Category Image" className="w-full h-72 object-cover mb-5 rounded-md" />
          <div className="bg-[#eee] rounded-md">
            <h4 className="gradient-text font-black text-4xl text-center uppercase flex justify-center items-center py-4">{title}</h4>
          </div>
        </>
      )}
    </div>
  );
}
export default Category;
