import './ListaSuspensa.css'
export const ListaSuspensa = (props) =>{
    return(
        <div className="lista-suspensa">
            <lebel>{props.label}</lebel>
            <select>
                {props.itens.map(item => {
                return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

