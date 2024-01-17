import style from "./categories.module.scss"

function Categories({ value, onClickCategory }) {
  const categories = ['Всё', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  // рендер списка
  return (
    <div className={style.categories}>
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={value === index ? 'active' : ''}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
