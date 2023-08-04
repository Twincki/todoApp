import ReactDOM from 'react-dom';

const AppHeader = () => {
  return <h1>Todo App</h1>;
};

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  );
};

const SearchPanel = () => {
  return <input placeholder="search" />;
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
