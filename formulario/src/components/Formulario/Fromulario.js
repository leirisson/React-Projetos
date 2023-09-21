import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import BotaoCadastrar from "../BotaoCadastrar"
import ListaSuspensa from "../ListaSusPensa"

export const Formulario = () =>{
    const itens =[
        'zagueiro',
        'Ala',
        'Fixo',
        'Goleiro'
    ]
    return (
        <section className="formulario-time">
            <form>
                <h2> Cadastro de Time</h2>
                <CampoTexto label="Nome do time" placeholder="Digite o nome do seu time"/>
                <CampoTexto label="Quantidade de jogadores" placeholder= "Digite a quantidade de jogadores"/>
                <CampoTexto label="Nome do tecnico" placeholder="Digite o nome do tecnico do Time"/>
                <CampoTexto label="Quantidade de reservas do time" placeholder="Digite o numero de jogadores reservas do time"/>
                <ListaSuspensa label="Posição do Jogador" itens={itens}/>
                <BotaoCadastrar value="Cadastrar Time "  />
            </form>
        </section>

    )
}