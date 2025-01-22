import Categories from './components/category/Categories';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <Main />
      <Categories />
    </div>
  );
}

export default App;
