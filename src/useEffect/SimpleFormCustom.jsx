import { useForm } from "../Hooks/useForm";

export const SimpleFormCustom = () => {

  const initialState = {
    username: '',
    email: '',
    password: ''
  }

  const { formState, onInputChange, onResetForm, username, email, password } = useForm(initialState);

  return(
    <>
      <h1>Simple Form</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      
      <input
        type="email"
        className="form-control"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">Borrars</button>

    </>
  )
}