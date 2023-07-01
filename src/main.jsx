import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
//import { SimpleFormCustom } from './useEffect/SimpleFormCustom'
// import { MultipleCustomHooks } from './MultipleCustomHooks'
// import { CounterAppCustom } from './useState/CounterAppCustom'
// import { FocusScreen } from './useRef/FocusScreen'
// import { Layout } from './useLayoutEffect/Layout'
// import { MemoHook } from './Memos/MemorizeHook'
// import { CallbackHook } from './Memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import './useReducer/intro-reducer'
// import { ToDoApp } from './useReducer/ToDoApp'
import { Main } from './useContext/MainApp';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // BrowserRouter es un HOC. Quiere decir, que recibe otros componentes dentro de el.
  <BrowserRouter>
    {/* <React.StrictMode> */}
      {/* <SimpleFormCustom /> */}
      {/* <MultipleCustomHooks /> */}
      {/* <FocusScreen /> */}
      {/* <Layout /> */}
      {/* <MemoHook /> */}
      {/* <CallbackHook /> */}
      <Main />

      {/* <Padre /> */}
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
