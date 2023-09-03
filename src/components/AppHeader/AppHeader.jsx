import styles from './AppHeader.module.scss';

const AppHeader = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Todo List</h1>
      <p className={styles.text}>1 more to do, 3 done</p>
    </div>
  );
};

export default AppHeader;
