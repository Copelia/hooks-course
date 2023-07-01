
import { ToDoList } from './ToDoList';
import { ToDoAdd } from './ToDoAdd';
import { UseTodoHook } from '../Hooks/UseTodoHook';

export const ToDoApp = () => {

  const { todos, handleToDo, handleDeleteToDo, handleToggleToDo } = UseTodoHook();
  
  return(
    <>
      <h1>To Do App: {todos.length},  <small> Pendientes: {todos.filter(todo => !todo.done).length}</small></h1>
      <hr/>

      <div className='row'>
        <div className='col-7'>
          <ToDoList 
            todos={todos} 
            onDeleteToDo={handleDeleteToDo}
            onToggleTodo={handleToggleToDo}
            /> 
        </div>

        <div className='col-5'>
          <h4>Agregar ToDo</h4>
          <hr />
          <ToDoAdd onNewToDo={handleToDo} />
        </div>
      </div>
    </>
  )
}