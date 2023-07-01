import { useForm } from '../Hooks/useForm';

export const ToDoAdd = ({onNewToDo}) => {

  const {description, onInputChange, onResetForm } = useForm({
    description: ''
  });

  const onFormSubmit = () => {
    event.preventDefault();
    if (description.length <= 1) return;
    const newToDo = {
      id: new Date().getTime(),
      description: description,
      done: false
    }

    onNewToDo(newToDo);
  }

  return(
    <form onSubmit={onFormSubmit}>
    <input 
      type="text" 
      placeholder='qué hay que hacer?'
      className='form-control'
      name="description"
      value={description}
      onChange={onInputChange}
    />
    <button 
      type="submit"
      className='btn btn-outline-primary mt-1'
      >
      Agregar
    </button>
  </form>
  )
}