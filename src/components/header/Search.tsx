import searchIcon from '/public/imgs/global/search-icon.svg';

type propsType = {
  navMobileVisible: boolean;
};

function Search({ navMobileVisible }: propsType) {
  return (
    <button className={`${navMobileVisible ? 'flex' : 'hidden'} justify-center mt-4 md:mt-0 w-full md:w-fit md:flex items-center gap-2 text-white bg-black rounded-md py-2 px-4`}>
      <img src={searchIcon} alt="search icon" />
      <span>Search</span>
    </button>
  );
}
export default Search;
