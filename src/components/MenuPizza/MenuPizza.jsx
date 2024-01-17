import style from './menuPizza.module.scss';
import { useState, useEffect } from 'react';
import Sort from '../Sort/Sort';
import Categories from '../Categories/Categories';
import Pizzas from '../Pizzas/Pizzas';
import Skeleton from '../Skeleton/Skeleton';
import Search from '../Search/Search';

function MenuPizza() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // категории
  const [categoryId, setCategoryId] = useState(0);
  // сортировка
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sort: 'rating',
  });
  // поиск пиццы
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
    fetch(
      `https://659aa4fd652b843dea53d3f3.mockapi.io/items?${category}&sortBy=${sortType.sort}&order=desc${search}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);

  // const pizzas = items
  //   .filter((pizza) => {
  //     if (pizza.title.toLowerCase().includes(searchValue.toLowerCase())) {
  //       return true;
  //     }
  //     return false;
  //   })
  //   .map((pizza) => <Pizzas key={pizza.id} {...pizza} />);

  const pizzas = items.map((pizza) => <Pizzas key={pizza.id} {...pizza} />);

  return (
    <section className={style.content}>
      <div className={style.content__top}>
        <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
        <Sort sortValue={sortType} onClickSort={(i) => setSortType(i)} />
      </div>
      <div className={style.content__wrapper}>
        <h2 className={style.content__title}>Все пиццы</h2>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className={style.content__items}>
        {isLoading ? [...new Array(12)].map((_, index) => <Skeleton key={index} />) : pizzas}
      </div>
    </section>
  );
}

export default MenuPizza;
