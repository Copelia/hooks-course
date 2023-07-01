import { useState, useMemo } from "react"
import { useCounter } from "../Hooks/useCounter"

const heavyStuff = (iterationNumber = 100) => {
  for (let i=0; i < iterationNumber; i++){
    console.log('ahí vamo...');
  }

  return  `${iterationNumber} iteraciones realizadas`

}

export const MemoHook = () => {

  const {counter, increment} = useCounter();
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return(
    <>
      <h1>Memorize</h1>
      <h2>Counter: <small>{counter}</small> </h2>
      <hr />

      <h4>{memorizedValue}</h4>

      <button
        className="btn btn-primary"
        onClick={() => increment()}
      
      > +1 </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  )
}