import React from "react";
import shortid from 'shortid';
import "./TodoSearch.css";
const TodoSearch = () => {
  const [tarea, setTarea] = React.useState("");
  const [tareas, setTareas] = React.useState([])
  const agregarTarea = (e) => {
    e.preventDefault();
    //Validamos que tenga algun texto
    if(!tarea.trim()){
      console.log('Elemento vacio')
      return
    }
    console.log(tarea);
    setTareas([
      ...tareas,
      {id: shortid.generate(), nombreTarea:tarea}
    ])
    setTarea('');
  };
  
  return (
    <>
      <form onSubmit={agregarTarea}>
        <input
          className="TodoSearch"
          placeholder="Ingresa un Todo..."
          onChange={(e) => setTarea(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
    </>
  );
};

export { TodoSearch };
