import './App.css'
import Header from './compoenet/Header';
import TodoEditor from './compoenet/TodoEditor';
import TodoList from './compoenet/TodoList';

function App() {
  return (
    <div className='App'>
      <Header />
      <TodoEditor />
      <TodoList />
    </div>
  );
}

export default App
