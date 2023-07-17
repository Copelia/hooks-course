import { toDoReducer } from '../toDoReducer';

describe("pruebas en use form", () => {

  const initialState = [{
    id: 1,
    description: 'Demo',
    done: false,
  }]

  test("debe regresar valores por defecto", () => {
    const newState = toDoReducer(initialState, {});
    expect(newState).toBe(initialState);

  });

  test("debe agregar un todo", () => {
    const action = {
      type: '[TODO] Add ToDo',
      payload: {
        id: 2,
        description: 'todo dos',
        done: false,
      }
    }

    const newState = toDoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);

  });

  test("debe eliminar un todo", () => {
    const action = {
      type: '[TODO] Remove ToDo',
      payload: {
        id: 2,
      }
    }

    const newState = toDoReducer(initialState, action);
    expect(newState.length).toBe(1);

  });

  test("debe realizar el toggle del todo", () => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1
    }

    const newState = toDoReducer(initialState, action);
    expect(newState[0].done).toBe(true);
  });

});
