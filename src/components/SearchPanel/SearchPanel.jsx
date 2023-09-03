import styles from './SearchPanel.module.scss';

import ButtonGroup from '../ButtonGroup/ButtonGroup';

const SearchPanel = () => {
  return (
    <div className={styles.main}>
      <input className={styles.input} placeholder="type to search" />
      <ButtonGroup />
    </div>
  );
};

export default SearchPanel;
