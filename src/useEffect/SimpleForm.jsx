import { useState, useEffect } from "react"

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'cor',
    email: 'mina@mozilla.com'
  });

  const { username, email } = formState;

  const onInputChange = ({target}) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    })
  }

  useEffect(() => {
    console.log('formState ha sido chamado');
  }, [formState]);

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
        placeholder="coral@pm.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  )
}