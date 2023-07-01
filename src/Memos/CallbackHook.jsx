
import { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  //Sirve para memorizar funciones y regresa una funcion que se va a ejecutar solo si algo cambia.
  const increment = useCallback(() => {
    setCounter((value) => value + 1);
  }, []);

  return (
    <>
      <h1> useCallback Hook : {counter}</h1>
      <hr />

      <ShowIncrement  increment={increment}/>
    </>
  )
}