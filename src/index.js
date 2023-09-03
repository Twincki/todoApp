import ReactDOM from 'react-dom';
import TodoList from './components/TodoList/TodoList';
import AppHeader from './components/AppHeader/AppHeader';
import SearchPanel from './components/SearchPanel/SearchPanel';

import styles from './index.module.scss';

const App = () => {
  const todoData = [
    { label: 'Drink Coffee' },
    { label: 'Have a lunch ' },
    { label: ' Make Awesome App' },
  ];

  return (
    <div className={styles.main}>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
