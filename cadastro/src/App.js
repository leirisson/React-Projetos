import Banner from "./components/Banner";
import { Formulario } from "./components/Formulario/Formulario";
import {useState} from 'react'

function App() {
  const [alunos, setAlunos] = useState([])

  const NovoAluno = (aluno) => {
    console.log("Aluno", aluno)
    // usando o sprad 
    setAlunos([...alunos, aluno])
  }
  return (
   
    <div className="App">
     <Banner />
     <Formulario alunoCadastrado={aluno => NovoAluno(aluno)}/>
    </div>
  );
}

export default App;
