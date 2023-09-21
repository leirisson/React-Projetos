import "./Formulario.css"
import CampoDeTexto from "../CampoDeTexto"
import { ListaSuspensa } from "../ListaSuspensa/ListaSuspensa"
import { Botao } from "../Botao/Botao"
function Formulario(){
    const times =[
        'Programação',
        'Front-End',
        'Data Science',
        'Idiomas',
        'Devops',
        'Redes'

    ]

    const AoSalvar = (evento) => {
        evento.preventDefault()
        console.log("Salvou !")
    }
    return(
        <section className="formulario">
            <form onSubmit={AoSalvar}>
                <h2 className="formulario__titulo">Preencha os dados para criar o card do colaborador.</h2>
                <CampoDeTexto obrigatorio= "true" label="Nome" placeholder="Digite seu nome"/>
                <CampoDeTexto obrigatorio= "true" label="Cargo" placeholder="Digite seu cargo"/>
                <CampoDeTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa obrigatorio= "true" label="Time"  itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario