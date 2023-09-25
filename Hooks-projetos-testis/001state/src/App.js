import './App.css';
import {useState} from 'react'

function App() {
  let [valor, setValor] = useState(0) 
  return (
    <div className="App">
      <h1 className='valor'>{valor}</h1>
     <button className='btn1' onClick={() => setValor(valor-1)}>-</button>
     <button className='btn' onClick={()  => setValor(0)}>0</button>
     <button className='btn2' onClick={() => setValor(valor+1)}>+</button>
    </div>
  );
}

export default App;
