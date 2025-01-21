import Container from '../Container';
import MainTitle from './MainTitle';
import basketball from '/public/basketball.png';

function Main() {
  return (
    <main className="relative z-10 bg-[#E1E8F0]">
      <img src={basketball} alt="Basketball image" className="absolute -z-10 top-32 left-3 opacity-10 w-80" />
      <Container className="min-h-[calc(100vh-72px)] pt-20">
        <MainTitle />
      </Container>
    </main>
  );
}
export default Main;
