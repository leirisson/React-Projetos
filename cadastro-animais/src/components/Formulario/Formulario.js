import './style.css'
import '../CampoDeTexto'
import '../Botao'
import CampoDeTexto from '../CampoDeTexto'
import Botao from '../Botao'
import {useState} from 'react'

export const Formulario = (props) =>{
    function salvandoDados (evento){
        evento.preventDefault()
        props.cadastro({
            numero,
            nome,
            dataDeNascimento,
            CPF,
            endereco,
            numeroDaCasa,
            CEP
        })

        // console.log("Numero: ", numero)
        // console.log("Nome: ",nome)
        // console.log("Data de Nascimento: ",dataDeNascimento)
        // console.log("CPF: ",CPF)
        // console.log("Endereco: ",endereco)
        // console.log("N° da Casa: ", numeroDaCasa)
        // console.log("CEP: ",CEP)
    }
    const [numero, setNovoNumero] = useState('')
    const [nome, setNovoNome] = useState('')
    const [dataDeNascimento, setNovaDataDeNascimento] = useState('')
    const [CPF, setNovoCPF] = useState('')
    const [endereco, setNovoEndereco] = useState('')
    const [numeroDaCasa, setNovoNumeroDaCasa] = useState('')
    const [CEP, setNovoCEP] = useState('')

    return(
        <div className="formulario">
            <h2>Formulario de Cadastro</h2>
            <form onSubmit={salvandoDados}>
            <CampoDeTexto 
            label="Número " 
            placeholder="Digite seu número"
            value={numero}
            guardandoTexto={numero => setNovoNumero(numero)}/>
            <CampoDeTexto 
            label="Nome " 
            placeholder="Digite seu nome"
            value={nome}
            guardandoTexto = {nome => setNovoNome(nome)}
            />
            <CampoDeTexto 
            label="Data Nascimento " 
            placeholder="Data de nascimento"
            value = {dataDeNascimento}
            guardandoTexto = {dataNascimento => setNovaDataDeNascimento(dataNascimento)}
            />
            <CampoDeTexto 
            label="CPF " 
            placeholder="Digite seu CPF"
            value={CPF}
            guardandoTexto={cpf => setNovoCPF(cpf)}
             />
            <CampoDeTexto 
            label="Endereço " 
            placeholder="Rua"
            value={endereco}
            guardandoTexto={endereco => setNovoEndereco(endereco)}
            />
            <CampoDeTexto 
            label="N° da Casa" 
            placeholder="Digite o numero da casa"
            value={numeroDaCasa}
            guardandoTexto={numero => setNovoNumeroDaCasa(numero)}
            />
            <CampoDeTexto 
            label="CEP " 
            placeholder="Digite seu CEP"
            value={CEP}
            guardandoTexto={cep => setNovoCEP(cep)}
            />
            <Botao texto="Cadastrar"/>
            </form>
        </div>
    )
}