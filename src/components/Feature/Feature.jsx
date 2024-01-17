import style from './Feature.module.scss';
import loveImg from '../../images/feature/love.png';
import productsImg from '../../images/feature/products.png';
import tasteImg from '../../images/feature/taste.png';
function Feature() {
  return (
    <section className={style.feature}>
      <h2 className={style.feature__title}>Everything You Want to Know</h2>
      <div className={style.feature__wrapper}>
        <div className={style.feature__item}>
          <img src={loveImg} alt="Made with love" />
          <h3 className={style.feature__subtitle}>Made with love</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur eos iste dicta
            deleniti? Saepe incidunt provident reprehenderit esse quam dolorem aliquid
          </p>
        </div>
        <div className={style.feature__item}>
          <img src={productsImg} alt="Fresh taste" />
          <h3 className={style.feature__subtitle}>Fresh taste</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur eos iste dicta
            deleniti? Saepe incidunt provident reprehenderit esse quam dolorem aliquid
          </p>
        </div>
        <div className={style.feature__item}>
          <img src={tasteImg} alt="feel the taste" />
          <h3 className={style.feature__subtitle}>feel the taste</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur eos iste dicta
            deleniti? Saepe incidunt provident reprehenderit esse quam dolorem aliquid
          </p>
        </div>
      </div>
    </section>
  );
}

export default Feature;
