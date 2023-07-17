import { fireEvent, render, screen, renderHook } from "@testing-library/react";
import { UserContext } from "../context/UserContext";
import { Login } from "../Login";


describe('Pruebas en componente', () => {
  const user = {
    id: 1,
    name: 'Cora'  
  };

  test('debe mostrar el componente sin usuario', () => {
    render(
      <UserContext.Provider value={{user: null}}>
        <Login />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre'); //aria-label
    expect(preTag.innerHTML).toBe('null');
  });

  test('debe mostrar el componente con usuario', () => {
    render(
      <UserContext.Provider value={{user}}>
        <Login />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre'); //aria-label
    //screen.debug(preTag);
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString());
  });

  test('debe llamar el setUser cuando se haga click', () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{user: null, setUser: setUserMock}}>
        <Login />
      </UserContext.Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(setUserMock).toHaveBeenCalledWith({ "name": 'cor', "age": 33});
  });

})