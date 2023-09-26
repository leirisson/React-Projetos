import './style.css'

export const CampoDeTexto = (props) =>{

    const capturandoTexto = (evento) => {
        let eventodaFuncao = evento.target.value
        props.guardandoTexto(eventodaFuncao)
        // console.log(eventodaFuncao)
        
    }
    return(
        <div className="CampoDeTexto">
            <label>{props.label}</label>
            <input value={props.value} type="text" onChange={capturandoTexto} placeholder={props.placeholder}/>
        </div>
    )
}