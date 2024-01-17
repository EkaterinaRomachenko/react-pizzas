import style from './gallery.module.scss';
import mainImg from '../../images/gallery/1.jpg';
import rightOneImg from '../../images/gallery/2.jpg';
import rightTwoImg from '../../images/gallery/3.jpg';
import leftOneImg from '../../images/gallery/4.jpg';
import leftTwoImg from '../../images/gallery/5.jpg';

function Gallery() {
  return (
    <section className={style.gallery}>
      <div className={style.gallery__container}>
        <img className={`${style.scale} ${style.gallery__medium}`} src={rightOneImg} alt="Man working with dough" />
        <img className={`${style.scale} ${style.gallery__medium}`} src={rightTwoImg} alt="Man rolling dough" />
      </div>
      <div className={style.gallery__container}>
        <img  className={`${style.gallery__main} ${style.scale}`} src={mainImg} alt="preparation of ingredients" />
      </div>
      <div className={style.gallery__container}>
        <img className={`${style.scale} ${style.gallery__medium}`} src={leftOneImg} alt="man making dough" />
        <img className={`${style.scale} ${style.gallery__medium}`} src={leftTwoImg} alt="dough" />
      </div>
    </section>
  );
}

export default Gallery;
