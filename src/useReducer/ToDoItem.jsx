export const ToDoItem = ({ todo, onDeleteToDo, onToggleTodo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span
          className={`align-self-center ${
            todo.done ? "text-decoration-line-through" : ""
          }`}
          aria-label="span"
          onClick={() => onToggleTodo(todo.id)}
        >
          {todo.description}
        </span>
        <button
          className="btn btn-danger"
          onClick={() => onDeleteToDo(todo.id)}
        >
          Borrar
        </button>
      </li>
    </>
  );
};
