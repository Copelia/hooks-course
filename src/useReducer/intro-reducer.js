
const initialState = [{
  id: 1,
  todo: 'Recolectar la piedra del Alma',
  done: false,
}];

const toDoReducer = (state = initialState, action = {}) => {
  if(action.type === '[TODO] add toDo' ) {
    // Se hace la copia del state, no se muta
    return [ ...state, action.payload]
  }

  return state;
};

let toDos = toDoReducer();

// console.log(toDos);
// Mala práctica, mutar el estado haciendo push al arreglo de todos.

const newToDo = {
  id: 2,
  todo: 'Recolectar la piedra del Cuerpo',
  done: false,
}

const addTodoAction = {
  type: '[TODO] add toDo',
  payload: newToDo,
}

toDos = toDoReducer(toDos, addTodoAction)

console.log('state:', toDos);