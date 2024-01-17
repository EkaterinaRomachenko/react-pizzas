import style from "./menuPizza.module.scss"
import { useState,useEffect } from "react";
import Sort from "../Sort/Sort";
import Categories from "../Categories/Categories";
import Pizzas from "../Pizzas/Pizzas";
import Skeleton from "../Skeleton/Skeleton";

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
  useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    fetch(
      `https://659aa4fd652b843dea53d3f3.mockapi.io/items?${category}&sortBy=${sortType.sort}&order=desc`,
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);
  
  return (
    <section className={style.content}>
      <div className={style.content__top}>
        <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
        <Sort sortValue={sortType} onClickSort={(i) => setSortType(i)} />
      </div>
      <h2 className={style.content__title}>Все пиццы</h2>
      <div className={style.content__items}>
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((pizza) => <Pizzas key={pizza.id} {...pizza} />)}
      </div>
    </section>
  );
}

export default MenuPizza;
