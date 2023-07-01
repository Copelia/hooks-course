export const ShowIncrement = ({ increment }) => {
  return(
    <button
      onClick={() => {
        increment();
      }}
    >
      Incrementar
    </button>
  )
}