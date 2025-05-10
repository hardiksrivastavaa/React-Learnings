import { useState } from "react";

export default function ToDoList() {
  const [todos, setTodos] = useState([{ task: "sample Todo", done: false }]);
  const [newTodo, setNewTodo] = useState("");

  // Add new task
  function addNewTask() {
    if (newTodo.trim() === "") return;
    setTodos((todos) => [...todos, { task: newTodo, done: false }]);
    setNewTodo("");
  }

  // Update input value
  const updateNewTodoValue = (e) => {
    setNewTodo(e.target.value);
  };

  // Delete task
  const deleteTodo = (key) => {
    setTodos(todos.filter((todo, index) => index !== key));
  };

  // Uppercase all tasks
  const upparcaseAll = () => {
    setTodos(
      todos.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
      }))
    );
  };

  // Uppercase a single task
  const upparcaseOne = (key) => {
    setTodos(
      todos.map((todo, index) =>
        index === key ? { ...todo, task: todo.task.toUpperCase() } : todo
      )
    );
  };

  // Toggle done/undone
  const markAsDone = (key) => {
    setTodos(
      todos.map((todo, index) =>
        index === key ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <>
      <h1>ToDo List</h1>

      <input
        type="text"
        placeholder="Enter your ToDo task..."
        value={newTodo}
        onChange={updateNewTodoValue}
      />
      <button onClick={addNewTask}>Add ToDo</button>

      <h2>Your Added Tasks</h2>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: todo.done ? "line-through" : "none",
              }}
            >
              {todo.task}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <button onClick={() => upparcaseOne(index)}>Uppercase</button>
            <button onClick={() => markAsDone(index)}>
              {todo.done ? "Undo" : "Done"}
            </button>
          </li>
        ))}
      </ul>

      <button onClick={upparcaseAll}>Uppercase All</button>
    </>
  );
}
