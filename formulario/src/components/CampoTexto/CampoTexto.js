import "./CampoTexto.css"
export const CampoTexto = (props) =>{
    const valorTexto = (evento) => {
        props.guardarTexto(evento.target.value)
    }
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} onChange={valorTexto} placeholder={props.placeholder}/>
        </div>
    )
}

