import { useCounter } from '../Hooks/useCounter';

export const CounterAppCustom = () => {

  const { counter, increment, decrement, reset } = useCounter();

  return(
    <>
      <h1>Counter with Custom Hook: {counter}</h1>
      <hr />
      <button className='btn btn-primary' onClick={increment}> +1 </button>
      <button className='btn btn-primary' onClick={reset}> Reset </button>
      <button className='btn btn-primary' onClick={decrement}> -1 </button>
    </>
  )
};
