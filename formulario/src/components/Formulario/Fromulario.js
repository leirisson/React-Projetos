import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import BotaoCadastrar from "../BotaoCadastrar"
import ListaSuspensa from "../ListaSusPensa"
import {useState} from 'react'
export const Formulario = (props) =>{
    const itens =[
        'zagueiro',
        'Ala',
        'Fixo',
        'Goleiro'
    ]
    const [nomDoTime, setNomeDoTime] = useState('')
    const [qtdeJogadores, setQtdeJogadores] = useState('')
    const [nomeDoTecnico, setNomeDoTecnico] = useState('')
    const [qtdeRservas, setQtdeReservas] = useState('')

    const Salvando = (evento) =>{
        evento.preventDefault()
        props.timeCadastrado(
            {
                nomDoTime,
                qtdeJogadores,
                nomeDoTecnico,
                qtdeRservas
            }
        )
        // console.log("Nome do Time: ", nomDoTime)
        // console.log("Quantidade de jogadores: ", qtdeJogadores)
        // console.log("Nome do tecnico: ", nomeDoTecnico)
        // console.log("quantidade de Reservas", qtdeRservas)
    }

    return (
        <section className="formulario-time">
            <form onSubmit={Salvando}>
                <h2> Cadastro de Time</h2>
                <CampoTexto
                 label="Nome do time" 
                 placeholder="Digite o nome do seu time"
                 value={nomDoTime}
                 guardarTexto={novoNomeDoTime => setNomeDoTime(novoNomeDoTime)}
                 />
                <CampoTexto 
                label="Quantidade de jogadores" 
                placeholder= "Digite a quantidade de jogadores"
                value={qtdeJogadores}
                guardarTexto={qtdeDejogadores => setQtdeJogadores(qtdeDejogadores)}
                />
                <CampoTexto 
                label="Nome do tecnico" 
                placeholder="Digite o nome do tecnico do Time"
                value={nomeDoTecnico}
                guardarTexto={tecnico => setNomeDoTecnico(tecnico)}
                />
                <CampoTexto 
                label="Quantidade de reservas do time" 
                placeholder="Digite o numero de jogadores reservas do time"
                value={qtdeRservas}
                guardarTexto={reservas => setQtdeReservas(reservas)}
                />
                <ListaSuspensa label="Posição do Jogador" itens={itens}/>
                <BotaoCadastrar value="Cadastrar Time "  />
            </form>
        </section>

    )
}