import * as React from "react";
import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { TodoItem } from "./components/TodoItem";

const todos = [
  { text: "Aprender js", completed: true },
  { text: "Aprender react", completed: false },
  { text: "Aprender redux", completed: false },
];

function App() {
  const [tareas, setTareas] = React.useState([]);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          // <li>
          //   <span>C</span>
          //   <p>{item.text}</p>
          //   <span>X</span>
          // </li>
          <TodoItem text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>
    </React.Fragment>
  );
}

export default App;
