export const CampoDeTexto = (props) =>{
    return(
        <div className="CampoDeTexto">
            <label>{props.label}</label>
            <input type="text" placeholder={props.placeholder}/>
        </div>
    )
}