import "./Formulario.css"
import {useState} from 'react'
import CampoDeTexto from "../CampoDeTexto"
import { ListaSuspensa } from "../ListaSuspensa/ListaSuspensa"
import { Botao } from "../Botao/Botao"
function Formulario(){

    const times =['Programação','Front-End','Data Science','Idiomas','Devops','Redes']

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const AoSalvar = (evento) => {
        evento.preventDefault()
        console.log(`Dados inseridos:
           Nome: ${nome}
           Cargo:  ${cargo}
           Imagem:  ${imagem}
           Time:  ${time}`)
    }

    return(
        <section className="formulario">
            <form onSubmit={AoSalvar}>
                <h2 className="formulario__titulo">Preencha os dados para criar o card do colaborador.</h2>
                <CampoDeTexto 
                    obrigatorio= "true" 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} 
                />
                <CampoDeTexto 
                obrigatorio= "true" 
                label="Cargo" 
                placeholder="Digite seu cargo"
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
                />
                <CampoDeTexto
                 label="Imagem" 
                 placeholder="Digite o endereço da imagem"
                 valor={imagem}
                 aoAlterado = {valor => setImagem(valor)}
                 />
                <ListaSuspensa 
                    obrigatorio= "true" 
                    label="Time"  
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario