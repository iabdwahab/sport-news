import Container from '../Container';
import Logo from './Logo';
import Navbar from './Navbar';
import Search from './Search';

function Header() {
  return (
    <header className="border-b border-[#eee]">
      <Container className="h-[72px] flex items-center justify-between">
        <Logo />
        <Navbar />
        <Search />
      </Container>
    </header>
  );
}
export default Header;
