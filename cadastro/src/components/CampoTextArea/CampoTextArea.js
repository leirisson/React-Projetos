import "./style.css"

export const CampoTextArea = (props) =>{
    
    function pegarObs (evento){
        props.passandoObs(evento.target.value)
    }
    return (
        <sectio className="text-area">
            <label>{props.label}</label>
            <textarea value={props.texto} onChange={pegarObs} rows={props.linhas} cols={props.colunas} ></textarea>
        </sectio>
    )
}