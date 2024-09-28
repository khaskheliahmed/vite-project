import { useState } from "react";

function App() {

  let [num, setNum] = useState(0)

  function addCounter() {
    console.log("counter added");
    setNum(num + 1)
    console.log(num);
  }

  function SubtCounter(){
    if (num >= 1) {
      setNum(num -1);

    }

  }
  return (
    <>
      <h1   >Hello world</h1>
      <h1>{num}</h1>
      <button onClick={addCounter}>add Counter</button>
      <button onClick={SubtCounter}>subt Counter</button>
    </>
  )
}

export default App
