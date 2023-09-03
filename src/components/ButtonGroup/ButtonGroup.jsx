import styles from './ButtonGroup.module.scss';

const ButtonGroup = () => {
  return (
    <div>
      <button className={styles.button}>All</button>
      <button className={styles.button}>Active</button>
      <button className={styles.button}>Done</button>
    </div>
  );
};

export default ButtonGroup;
