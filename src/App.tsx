import Categories from './components/category/Categories';
import Container from './components/Container';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Recent from './components/recent/Recent';
import Slider from './components/slider/Slider';
import Trending from './components/trending/Trending';

function App() {
  return (
    <div className="relative min-h-screen mb-8">
      <Header />
      <Main />
      <Categories />
      <Trending />
      <Slider />
      <Container className="grid grid-cols-2">
        <Recent />
      </Container>
    </div>
  );
}

export default App;
