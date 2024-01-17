import { useState } from 'react';
import style from './pizzas.module.scss';
import PropTypes from "prop-types";

function PizzaBlock({ imageUrl, title, price, sizes, types }) {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const typeName = ['тонкое', 'традиционное'];
  return (
    <div className={style.pizza}>
      <div className={style.pizza__wrapper}>
        <img className={style.pizza__image} src={imageUrl} alt={title} />
        <h4 className={style.pizza__title}>{title}</h4>
        <div className={style.pizza__selector}>
          <ul>
            {types.map((type) => {
              return (
                <li
                  className={activeType === type ? "active" : ''}
                  key={type}
                  onClick={() => {
                    setActiveType(type);
                  }}
                >
                  {typeName[type]}
                </li>
              );
            })}
          </ul>
          <ul>
            {sizes.map((size, index) => {
              return (
                <li
                  key={size}
                  onClick={() => {
                    setActiveSize(index);
                  }}
                  className={activeSize === index ? 'active' : ''}
                >
                  {size}см.
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.pizza__bottom}>
          <div className={style.pizza__price}>от {price} ₽</div>
          <button className="button button--outline button--add">
            <svg
              className={style.icon}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <p>2</p>
          </button>
        </div>
      </div>
    </div>
  );
}

// проверяем на типы
PizzaBlock.propTypes ={
  sizes: PropTypes.object,
  price: PropTypes.number,
  title: PropTypes.string,
  types: PropTypes.object,
  imageUrl: PropTypes.string
}

export default PizzaBlock;