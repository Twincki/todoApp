import ReactDOM from 'react-dom';
import TodoList from './components/TodoList/TodoList';
import AppHeader from './components/AppHeader/AppHeader';
import SearchPanel from './components/SearchPanel/SearchPanel';

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false },
    { label: 'Learn React Build', important: false },
    { label: 'Awesome App', important: true },
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
