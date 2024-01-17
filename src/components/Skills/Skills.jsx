import style from './Skills.module.scss';

function Skills() {
  return (
    <section class={style.skills}>
      <h2 class={style.skills__title}>Skills</h2>
      <div className={style.skills__container}>
        <div class={style.skill}>
          <div class={style.skill__bar}>
            <div class={style.skill__info}>
              <span>Сooking</span>
            </div>
            <div class={`${style.skill__progress} ${style.one}`}>
              <span></span>
            </div>
          </div>
          <div class={style.skill__bar}>
            <div class={style.skill__info}>
              <span>Creative</span>
            </div>
            <div class={`${style.skill__progress} ${style.two}`}>
              <span></span>
            </div>
          </div>
          <div class={style.skill__bar}>
            <div class={style.skill__info}>
              <span>Delivery</span>
            </div>
            <div class={`${style.skill__progress} ${style.three}`}>
              <span></span>
            </div>
          </div>
        </div>
        <div class={style.skill}>
          <div class={style.skill__bar}>
            <div class={style.skill__info}>
              <span>Service</span>
            </div>
            <div class={`${style.skill__progress} ${style.four}`}>
              <span></span>
            </div>
          </div>
          <div class={style.skill__bar}>
            <div class={style.skill__info}>
              <span>Interior</span>
            </div>
            <div class={`${style.skill__progress} ${style.five}`}>
              <span></span>
            </div>
          </div>
          <div class={style.skill__bar}>
            <div class={style.skill__info}>
              <span>Cooking Speed</span>
            </div>
            <div class={`${style.skill__progress} ${style.six}`}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
