import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import {useState} from 'react'
function App() {
  const [times, setTimes] = useState([])

  const novoTime = (time) =>{
    
    setTimes([...times, time])
    console.log(time)
  }
  return (
    <div className="App">
      <Banner />
      <Formulario timeCadastrado={time => {novoTime(time)}}/>
    </div>
  );
}

export default App;
