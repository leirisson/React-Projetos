import { useState } from "react";
import Banner from "./components/Banner";
import { Formulario } from "./components/Formulario/Formulario";
import  Time  from "./components/Time";
import Produto from "./components/Produto";


function App() {
  const time = {nome:"produto"}
  const [produtos, setNovoProduto] = useState([])
  const InserindoNovoProduto = (produto) =>{
    setNovoProduto([...produtos, produto])
    console.log("Produto Cadastrado")
    console.log(produto)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
      CadastroDoProduto={produto => InserindoNovoProduto(produto)}/> 
      
      <Time texto="Produtos">
              {produtos.map(produto => <Produto
              produto={produtos.filter(produto => produto.tipo === time.nome)}
              url={produto.url}
              nome= {produto.nomeProduto}
              descricao = {produto.descricaoProduto} 
              preco={produto.preco}
              texto="Produto"
          />)}
      </Time>
      
      </div>
  
  );
}

export default App;
