import styles from '../NotFoundBlock/NotFoundBlock.module.scss';

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>
        Ничего не найдено <span>🙁</span>
      </h1>
      <p className={styles.description}>
        К сожалению, данная страница недоступна в нашем магазине
      </p>
    </div>
  );
}

export default NotFoundBlock;
