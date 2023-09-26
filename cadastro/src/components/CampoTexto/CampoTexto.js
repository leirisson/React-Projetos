import './style.css'



export const CampoTexto = (props) =>{
    // let valor = ''
   

    const sendoDigitado = (evento) =>{
        props.alterandoValor(evento.target.value)
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value = {props.value} onChange={sendoDigitado} placeholder={props.placeholder}/>
        </div>
    )
}