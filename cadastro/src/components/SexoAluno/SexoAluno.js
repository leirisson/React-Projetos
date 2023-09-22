import "./style.css"
export const SexoAluno = (props) => {
    return (
        <div className="sexo">
            <div>
                <label>{props.label}</label>
                <input type="radio"  checked={props.checked}/>
            </div>
        </div>

    )

}