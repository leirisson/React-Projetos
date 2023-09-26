import Cabecalho from './components/Cabecalho'
import Barra from './components/Barra'
import Banner from './components/Banner'
import Formulario from './components/Formulario'
import {useState} from 'react'
function App() {
  const [cadastros, setNovoCadastro] = useState([])

  const NovoCadastro = (cadastro) =>{

    setNovoCadastro([...cadastros, cadastro])
    console.log("CADASTRADO COM SUCESSO !")
    console.log("Cadastro: ", cadastro)
  }
  return (
    <div className="App">
      <Cabecalho src="../imagens/pataGato.png" alt="Logo pata de gato"/>
      <Barra />  
      <Banner 
      src="/imagens/adote-pet.jpg" 
      alt="Banner adote um pet"
      titulo="Adoção de um Animal de Estimação"
      descricao="
         A decisão de adotar um animal de estimação é um ato de amor e responsabilidade.
         Antes de escolher um companheiro peludo, é essencial considerar o compromisso de longo prazo.
         Adoção significa oferecer um lar amoroso a um animal que precisa, contribuindo para reduzir o abandono. 
         Respeitar as necessidades e cuidados de um pet é fundamental para garantir sua saúde e felicidade.
         Adote conscientemente, faça pesquisas e esteja preparado para dedicar tempo e carinho. 
         Ao adotar, você não apenas ganha um amigo fiel, mas também faz a diferença na vida de um ser necessitado."/>
         
      <Formulario cadastro={cadastro => NovoCadastro(cadastro)} />
  
    </div>
  );
}

export default App;
