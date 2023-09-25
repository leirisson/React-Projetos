import {useState} from 'react'
import './App.css';

function App() {
  //gerenciar o estrado de algum valor
  const name = useState("Leirisson")
  const [numero, setNumero]  = useState(0)
  return (
    <div className="App">
     <h1>usuario: {name}</h1>
     <div>
      <h1>{numero}</h1>
      <button onClick={() => setNumero(numero-1)}>-</button>
      <button onClick={() => setNumero(0)}>0</button>
      <button onClick={() => setNumero(numero + 1)}>+</button>
     </div>
    </div>
  );
}

export default App;
