import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

let addValue = () => {
  setCounter(counter + 1);
  // console.log(counter);
}

let removeValue = () =>{
  if(counter === 0){
    alert("Counter value is already zero");
    return;
  }
  setCounter(counter - 1);
  // console.log(counter);
}

  return (
    <>
      <h1>Welcome to the counter project</h1>
      <h2>Counter Value: {counter}</h2>
      <div>
        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeValue}>Remove Value</button>
        </div>
    </>
  )
}

export default App
