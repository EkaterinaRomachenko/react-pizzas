import style from './Footer.module.scss';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer class={style.footer}>
      <div class={style.footer__container}>
        <div class={style.footer__row}>
          <div className={style.footer__outStory}>
            <h4 className={style.footer__title}>Out Story</h4>
            <p className={style.footer__item}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, vero temporibus!
              Quaerat nemo placeat minus suscipit molestiae corporis necessitatibus velit facilis.
            </p>
            <div className={style.footer__workHous}>
              <a href="#" className={style.footer__linkWatch}>
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  width="28px"
                  height="28px"
                >
                  <path
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span>Mon - Sat 8.00 - 18.00</span>
              </a>
              <a href="#" className={style.footer__linkWatch}>
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  width="28px"
                  height="28px"
                >
                  <path
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span>Sunday closed</span>
              </a>
            </div>
          </div>
          <div class={style.footer__wrapper}>
            <div class={style.footer__info}>
              <h4 class={style.footer__title}>Information</h4>
              <ul>
                <li className={style.footer__infoLink}>
                  <Link to="/">Home</Link>
                </li>
                <li className={style.footer__infoLink}>
                  <Link to="/menu">Menu</Link>
                </li>
                <li className={style.footer__infoLink}>
                  <Link to="/about">About</Link>
                </li>
                <li className={style.footer__infoLink}>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div class="footer__contacts">
              <h4 class={style.footer__title}>Сontacts</h4>
              <p className={style.footer__item}>
                <a href="tel:79055555555"> +7 (905) 555-55-55 </a>
              </p>
              <p className={style.footer__item}>
                <a href="mailto:ekaterina@yandex.ru">ekaterina@yandex.ru</a>
              </p>
              <p className={style.footer__item}>Moscow, Ryazansky prospect 54, office 112.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
