import "./style.css"
export const StatusDoAluno = (props) => {
    return (
        <div className="status-aluno">
            <label>{props.label}</label>
                <select>
                {props.status.map(estado => {
                    return <option> {estado} </option>
                })}
                </select>
        </div>
    )
}  