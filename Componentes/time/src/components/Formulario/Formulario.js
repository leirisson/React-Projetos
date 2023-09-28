import './style.css'
import CampoTexto from '../CampoTexto'
import {useState} from 'react'
import Botao from '../Botao'
export const Formulario = (props) =>{
    
    const [nomeProduto, setNovoNomeProduto] = useState('')
    const [descricaoProduto, setNovaDescricaoProduto] = useState('')
    const[url, setNovaUrl] = useState('')
    const [preco, setNovoPreco] =useState('')

    const EnviandoDados = (evento) =>{
        const tipo = "produto"
        evento.preventDefault()
        props.CadastroDoProduto(
            {
                nomeProduto,
                descricaoProduto, 
                url, 
                preco,
                tipo
            }
        )
        setNovoNomeProduto('')
        setNovaDescricaoProduto('')
        setNovaUrl('')

    }


   return( 
        <div className="formulario">
            <form onSubmit={EnviandoDados}>
                <h3>Cadastro dos produtos</h3>
                <CampoTexto 
                label="Nome do produto" 
                placeholder="Digite o nome do produto"
                value={nomeProduto}
                recebendoValores={nomeProduto => setNovoNomeProduto(nomeProduto)}
                />
                <CampoTexto 
                label="Descrição do produto" 
                placeholder="Digite a descrição do produto"
                value={descricaoProduto}
                recebendoValores={descricao => setNovaDescricaoProduto(descricao)}
                />
                <CampoTexto 
                label="Url da imagem do prosuto" 
                placeholder="informe a url da imagem"
                value={url}
                recebendoValores={url => setNovaUrl(url)}
                />
                <CampoTexto 
                label="Preço"
                placeholder="informe o preço do produto"
                value={preco}
                recebendoValores={preco => setNovoPreco(preco)}
                />
                <Botao />
               
                </form>
        </div>
   )
}