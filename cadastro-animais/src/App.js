import { Banner } from './components/Banner/Banner';
import { Barra } from './components/Barra/Barra';
import Cabecalho from './components/Cabecalho'
import { CampoDeTexto } from './components/CampoDeTexto/CampoDeTexto';
function App() {
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
         <CampoDeTexto label="Número " placeholder="Digite seu número"/>
         <CampoDeTexto label="Nome " placeholder="Digite seu nome"/>
         <CampoDeTexto label="Data Nascimento " placeholder="Data de nascimento"/>
         <CampoDeTexto label="CPF " placeholder="Digite seu CPF"/>
         <CampoDeTexto label="Endereço " placeholder="Rua"/>
         <CampoDeTexto label="N° da Casa" placeholder="Digite o numero da casa"/>
         <CampoDeTexto label="CEP " placeholder="Digite seu CEP"/>

    </div>
  );
}

export default App;
