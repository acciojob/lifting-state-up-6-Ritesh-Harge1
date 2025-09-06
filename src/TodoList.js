function TodoList({ todos, onComplete }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "gray" : "black",
              marginRight: "10px",
            }}
          >
            {todo.text}
          </span>

          {!todo.completed && (
            <button onClick={() => onComplete(todo.id)}>Complete</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
