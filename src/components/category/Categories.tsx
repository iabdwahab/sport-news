import Container from '../Container';
import Category from './Category';

import footballCategory from '/public/imgs/category/category-football.png';
import basketballCategory from '/public/imgs/category/category-basketball.png';
import carSportCategory from '/public/imgs/category/category-car-sport.png';
import tableTennisCategory from '/public/imgs/category/category-table-tennis.png';
import SectionTitle from '../global/SectionTitle';

function Categories() {
  const categoriesList = [
    {
      title: 'football',
      imgURL: footballCategory,
    },
    {
      title: 'basketball',
      imgURL: basketballCategory,
    },
    {
      title: 'car sport',
      imgURL: carSportCategory,
    },
    {
      title: 'table tennis',
      imgURL: tableTennisCategory,
    },
  ];

  const categoriesElements = categoriesList.map((category, index) => {
    const titleTop = index % 2 == 0 && window.innerWidth > 768;

    return <Category key={index} titleTop={titleTop} {...category} />;
  });

  return (
    <section>
      <Container className="py-4">
        <SectionTitle>Category</SectionTitle>
        <div className="grid grid-cols-categories gap-4 mt-4">{categoriesElements}</div>
      </Container>
    </section>
  );
}
export default Categories;
