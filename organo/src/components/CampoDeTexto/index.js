import "./CampoDeTexto.css"
function CampoDeTexto(props){

    return (
        <div className="campo__texto">
            <label>{props.label}</label>
            <input type="text" id="nome" placeholder={props.placeholder}/>
        </div>
    )
    
}

export default CampoDeTexto