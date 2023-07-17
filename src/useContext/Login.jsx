import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const Login = () => {

  const { user, setUser } = useContext( UserContext);

  return (
    <>
      <h1>Login</h1>
      <hr />
      <pre aria-label="pre">
        {JSON.stringify(user, null, 3)}
      </pre>

      <button className="btn btn-primary" onClick={() => setUser({ name: 'cor', age: 33})}>
        Establecer usuario
      </button>
    </>
  )
}