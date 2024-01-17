import style from './mainBaner.module.scss';

function MainBaner() {
  return (
    <>
      <section className={style.baner}>
        <h1 className={style.baner__title}>the best pizza in Kaliningrad</h1>
      </section>
    </>
  );
}

export default MainBaner;
