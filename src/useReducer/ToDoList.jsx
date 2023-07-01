import { ToDoItem } from "./ToDoItem"

export const ToDoList = ({todos, onDeleteToDo, onToggleTodo}) => {
  return(
    <>
      <ul className='list-group'>
        {
          todos.map(todo => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              onDeleteToDo={onDeleteToDo}
              onToggleTodo={onToggleTodo}
            />
          ))
        }
      </ul>
    </>
  )
}
