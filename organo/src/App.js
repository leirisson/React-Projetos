import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time/'
import {useState} from 'react'


function App() {
  const Times = [
    {
      nome:'Programação',
      corPrimaria: '#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria:'#E8F8FF'
    },  {
      nome:'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria:'#F0F8E2'
    }, 
     {
      nome:'Idiomas',
      corPrimaria: '#E06B69',
      corSecundaria:'#FDE7E8'
    }, 
    {
      nome:'Devops',
      corPrimaria: '#DB6EBF',
      corSecundaria:'#FAE9F5'
    },  
    {
      nome:'Redes',
      corPrimaria: '#FFBA05',
      corSecundaria:'#FFF5D9'
    },  
    {
      nome:'Inovação e gestão',
      corPrimaria: '#FF8A29',
      corSecundaria:'#FFEEDF'
    }
  ]

  const [colaboradores, setNovocolaborador] = useState([])
  const aoNovoColaboradorAdcionado = (colaborador) =>{
    debugger
    setNovocolaborador([...colaboradores, colaborador])
    console.log(colaborador)
  }
  return (
    <div className="App">
      <Banner />
      <Formulario NomeDostimes={Times.map(time => time.nome)}
       cadastroDoColaborador = {colaborador => aoNovoColaboradorAdcionado(colaborador)}
       />
      {Times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />)}
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
