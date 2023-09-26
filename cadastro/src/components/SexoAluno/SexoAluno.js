import "./style.css"
export const SexoAluno = (props) => {
    return (
        <div className="sexo">
            <div>
                <label>{props.label}</label>
                <input type="radio"  key={props.label} checked={props.checked}/>
            </div>
        </div>

    )

}