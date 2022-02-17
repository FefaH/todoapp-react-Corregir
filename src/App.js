import * as React from 'react';
import './App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';

const todos = [
  { text: "Aprender js", completed: true },
  { text: "Aprender react", completed: false },
  { text: "Aprender redux", completed: false },
];

function App() {
  const [tareas, setTareas] = React.useState([])
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map( item => (
          <li>
            {item}
          </li>
          ))
        }
      </TodoList>
    </React.Fragment>
  );
}

export default App;
