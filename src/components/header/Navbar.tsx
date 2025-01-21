import NavLink from './NavLink';

function Navbar() {
  const navList = ['home', 'category', 'trending news', 'club ranking', 'sports article'];

  return (
    <nav>
      <ul className="flex gap-4">
        {navList.map((navItem) => (
          <li>
            <NavLink>{navItem}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
