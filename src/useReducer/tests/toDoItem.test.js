import { fireEvent, render, screen } from "@testing-library/react";
import { ToDoItem } from "../ToDoItem";

describe("pruebas en todo item", () => {
  const todo = {
    id: 1,
    description: "seguir estudiando",
    done: false,
  };

  const onToggleTodoMock = jest.fn();
  const onDeleteTodoMock = jest.fn();

  // si vamos a usar estas funciones en otras pruebas, usar el beforeEach
  beforeEach(() => jest.clearAllMocks());

  test("debe mostrar el todo pendiente", () => {
    render(
      <ToDoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteToDo={onDeleteTodoMock}
      />
    );

    const liElem = screen.getByRole('listitem');
    expect(liElem.className).toBe('list-group-item d-flex justify-content-between');

    const spanElem = screen.getByLabelText('span');
    expect(spanElem.className).toContain('align-self-center');
    expect(spanElem.className).not.toContain('text-decoration-line-through');

  });

  test("debe mostrar el todo completado", () => {
    
    todo.done = true;

    render(
      <ToDoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteToDo={onDeleteTodoMock}
      />
    );

    const spanElem = screen.getByLabelText('span');
    expect(spanElem.className).toContain('text-decoration-line-through');

  });

  test("debe llamar el toggle todo cuando se hace click", () => {

    render(
      <ToDoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteToDo={onDeleteTodoMock}
      />
    );

    const spanElem = screen.getByLabelText('span');
    fireEvent.click(spanElem);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)

  });

  test("button debe llamar el ondelete del todo cuando se hace click", () => {

    render(
      <ToDoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteToDo={onDeleteTodoMock}
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

  });

});
