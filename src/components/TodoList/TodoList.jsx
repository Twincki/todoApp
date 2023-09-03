import TodoListItem from '../TodoListItem/TodoListItem';
import styles from './TodoList.module.scss';

import { BsTrash } from 'react-icons/bs';
import { TbExclamationMark } from 'react-icons/tb';

const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    return (
      <div className={styles.wrap}>
        <li className={styles.list}>
          <TodoListItem {...item} />{' '}
          <div>
            <BsTrash className={styles.trash} />
            <TbExclamationMark className={styles.mark} />
          </div>
        </li>
      </div>
    );
  });

  return <ul className={styles.ul}>{elements}</ul>;
};

export default TodoList;
