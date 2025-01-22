import { useState } from 'react';
import Container from '../Container';
import Logo from './Logo';
import Navbar from './Navbar';
import Search from './Search';
import menuIcon from '/public/imgs/global/menu.svg';

function Header() {
  const [navMobileVisible, setNavMobileVisible] = useState(false);

  return (
    <header className="border-b border-[#eee] bg-white">
      <Container className="h-[72px] flex items-center justify-between">
        <Logo />
        <Navbar navMobileVisible={navMobileVisible} setNavMobileVisible={setNavMobileVisible} />
        <Search navMobileVisible={navMobileVisible} />

        <button className="md:hidden" onClick={() => setNavMobileVisible(true)}>
          <img src={menuIcon} alt="Click to View Navigation Links" className="w-6" />
        </button>
      </Container>
    </header>
  );
}
export default Header;
