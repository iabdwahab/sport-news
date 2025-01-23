import Articles from './components/articles/Articles';
import Categories from './components/category/Categories';
import ClubsRanking from './components/clubs_ranking/ClubsRanking';
import Container from './components/Container';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Newsletter from './components/newsletter/Newsletter';
import Recent from './components/recent/Recent';
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
      <Container className="grid grid-cols-1 xl:grid-cols-2">
        <Recent />
        <ClubsRanking />
      </Container>
      <Articles />
      <Newsletter />
    </div>
  );
}

export default App;
