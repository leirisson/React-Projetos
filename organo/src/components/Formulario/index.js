import "./Formulario.css"
import CampoDeTexto from "../CampoDeTexto"
function Formulario(){
    return(
        <section className="formulario">
            <form>
                <h2 className="formulario__titulo">Preencha os dados para criar o card do colaborador.</h2>
                <CampoDeTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoDeTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoDeTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
            </form>
        </section>
    )
}

export default Formulario