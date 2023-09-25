import './ListaSuspensa.css'

export const ListaSuspensa = (props) =>{
    return(
        <div className="lista-suspensa">
            <lebel>{props.label}</lebel>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                {props.itens.map(item => {
                return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

