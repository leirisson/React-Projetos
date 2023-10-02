
import { useState } from 'react';
import './App.css';



function App() {
const [endereco, setNovoEndereco] = useState({})


function manipularEndereco(evento){
  const cep = evento.target.value
  setNovoEndereco({
    cep
  })
  if(cep && cep.length === 8){
    fetch(`viacep.com.br/ws/${cep}/json/`)
    .then(resposta => {
      resposta.json()
      console.log(resposta)
    })
    .then(dados => {
      setNovoEndereco(
        {
          cep: cep,
          rua: dados.logradouro,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        }
      )
    }
    
   )
}
}
  return (
    <div className="App">
      <header className="App-header">
       <input onChange={manipularEndereco} placeholder='Digite um CEP'/>
       <ul>
        <li>CEP: {endereco.cep}</li>
        <li>Bairro: {endereco.bairro}</li>
        <li>Cidade: {endereco.cidade}</li>
        <li>Estado: {endereco.estado}</li>
       </ul>
      </header>
    </div>
  );

}
export default App;
