import './style.css'

export const CampoTexto = (props) =>{
    const ObtendoDados = (evento) =>{
        let eventos = evento.target.value
        props.recebendoValores(eventos)
    }
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={ObtendoDados} value={props.value} placeholder={props.placeholder}/>
        </div>
    )
}