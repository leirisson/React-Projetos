import "./style.css"
export const CampoTextArea = (props) =>{
    return (
        <sectio className="text-area">
            <label>{props.label}</label>
            <textarea rows={props.linhas} cols={props.colunas} ></textarea>
        </sectio>
    )
}