import Container from '../Container';
import Category from './Category';

import footballCategory from '/public/football-category.png';
import basketballCategory from '/public/basketball-category.png';
import carSportCategory from '/public/car-sport-category.png';
import tableTennisCategory from '/public/table-tennis-category.png';

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
        <h3 className="font-medium text-2xl">Category</h3>
        <div className="grid grid-cols-categories gap-4 mt-4">{categoriesElements}</div>
      </Container>
    </section>
  );
}
export default Categories;
