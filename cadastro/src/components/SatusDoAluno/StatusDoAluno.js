import "./style.css"
export const StatusDoAluno = (props) => {
    const selecionandoestado = (evento) =>{
        props.estado(evento.target.value)
    }
    return (
        <div className="status-aluno">
            <label >{props.label}</label>
                <select value={props.value} onChange={selecionandoestado}>
                {props.status.map(estado => {
                    return <option key={estado}> {estado} </option>
                })}
                </select>
        </div>
    )
}  