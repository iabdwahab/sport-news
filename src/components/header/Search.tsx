import searchIcon from '/public/searchIcon.svg';

function Search() {
  return (
    <div>
      <button className="flex items-center gap-2 text-white bg-placeholder hover:bg-black duration-150 rounded-md py-2 px-4">
        <img src={searchIcon} alt="search icon" />
        <span>Search</span>
      </button>
    </div>
  );
}
export default Search;
