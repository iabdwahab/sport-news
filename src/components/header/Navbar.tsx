import NavLink from './NavLink';
import Search from './Search';
import closeIcon from '/public/closeIcon.png';

type propsType = {
  navMobileVisible: boolean;
  setNavMobileVisible: Function;
};

const navList = ['home', 'category', 'trending news', 'club ranking', 'sports article'];

function Navbar({ navMobileVisible, setNavMobileVisible }: propsType) {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar navMobileVisible={navMobileVisible} setNavMobileVisible={setNavMobileVisible} />
    </>
  );
}

function DesktopNavbar() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-4">
        {navList.map((navItem, index) => (
          <li key={index}>
            <NavLink>{navItem}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MobileNavbar({ navMobileVisible, setNavMobileVisible }: propsType) {
  return (
    <div className={`md:hidden ${navMobileVisible ? 'block' : 'hidden'} absolute z-50 top-0 right-0 text-black bg-[#eee] w-[calc(100%-40px)] h-full min-h-fit px-4 pb-4`}>
      <div className="h-[72px] flex items-center justify-end">
        <button onClick={() => setNavMobileVisible(false)}>
          <img src={closeIcon} alt="Click to Hide Navigation" className="w-6" />
        </button>
      </div>

      <nav>
        <ul className="flex flex-col gap-2">
          {navList.map((navItem, index) => (
            <li key={index}>
              <NavLink>{navItem}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Search navMobileVisible={navMobileVisible} />
    </div>
  );
}
export default Navbar;
