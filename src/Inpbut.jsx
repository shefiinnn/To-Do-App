import React, { useState } from 'react';

function Inpbut() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo(""); 
  }

  function handleDelete(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function handleEdit(index) {
    const updatedTodo = prompt("Update your task:", todos[index]);
    if (updatedTodo !== null) {
      const updatedTodos = [...todos];
      updatedTodos[index] = updatedTodo;
      setTodos(updatedTodos);
    }
  }

  return (
    <>
      <h2>TODO</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {todos.map((item, index) => (
        <div key={index}>
          <h1>{item}</h1>
          <button onClick={() => handleDelete(index)}>Delete</button>
          <button onClick={() => handleEdit(index)}>Edit</button>
        </div>
      ))}
    </>
  );
}

export default Inpbut;
