import Categories from './components/category/Categories';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Slider from './components/slider/Slider';
import Trending from './components/trending/Trending';

function App() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <Main />
      <Categories />
      <Trending />
      <Slider />
    </div>
  );
}

export default App;
