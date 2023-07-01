import { useReducer, useEffect } from 'react';
import { toDoReducer } from '../useReducer/toDoReducer';

export const UseTodoHook = () => {

  const initialState = [];
  
  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }

  const [todos, dispatch] = useReducer(toDoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleToDo = (todo) => {
    const action = {
      type: '[TODO] Add ToDo',
      payload: todo
    }
    dispatch(action);
  };

  const handleDeleteToDo = (id) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    })
  }

  const handleToggleToDo = (id) => {
    dispatch({
      type: '[TODO] Remove ToDo',
      payload: id
    })
  }

  return {
    todos,
    handleToDo,
    handleDeleteToDo,
    handleToggleToDo
  }

}