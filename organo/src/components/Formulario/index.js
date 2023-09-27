import "./Formulario.css"
import {useState} from 'react'
import CampoDeTexto from "../CampoDeTexto"
import { ListaSuspensa } from "../ListaSuspensa/ListaSuspensa"
import { Botao } from "../Botao/Botao"
function Formulario(props){



    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const AoSalvar = (evento) => {
        evento.preventDefault()
        props.cadastroDoColaborador({
            nome,
            cargo,
            imagem,
            time
        })

        //limpando os inputs depois do cadastro dos colaboradores
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        // console.log(`Dados inseridos:
        //    Nome: ${nome}
        //    Cargo:  ${cargo}
        //    Imagem:  ${imagem}
        //    Time:  ${time}`)
    }

    return(
        <section className="formulario">
            <form onSubmit={AoSalvar}>
                <h2 className="formulario__titulo">Preencha os dados para criar o card do colaborador.</h2>
                <CampoDeTexto 
                    obrigatorio= "false" 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} 
                />
                <CampoDeTexto 
                obrigatorio= "false" 
                label="Cargo" 
                placeholder="Digite seu cargo"
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
                />
                <CampoDeTexto
                obrigatorio= "false" 
                 label="Imagem" 
                 placeholder="Digite o endereço da imagem"
                 valor={imagem}
                 aoAlterado = {valor => setImagem(valor)}
                 />
                <ListaSuspensa 
            
                    label="Time"  
                    itens={props.NomeDostimes}
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