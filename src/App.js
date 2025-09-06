import { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  // Initial todos state
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice Assignments", completed: false },
    { id: 3, text: "Build Projects", completed: false },
  ]);

  // Handler to mark todo as complete
  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>Lifting State Up Demo - Todo List</h1>
      <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  );
}

export default App;
