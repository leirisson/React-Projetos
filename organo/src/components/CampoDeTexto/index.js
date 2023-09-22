import "./CampoDeTexto.css"
function CampoDeTexto(props){


    const Digintando = (evento) =>{
        props.aoAlterado(evento.target.value)        
    }
    return (
        <div className="campo__texto">
            <label>{props.label}</label>
            <input
             value={props.valor} 
             onChange={Digintando} 
             required={props.obrigatorio} 
             id="nome" 
             placeholder={props.placeholder}
             />
        </div>
    )
    
}

export default CampoDeTexto