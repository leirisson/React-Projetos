import "./style.css"
export const CardProduto = (props) => {
    return(
        <div className="card">
            <div className="card-descricao">
                    <h2 className="card-descricao-titulo">{props.titulo}</h2>
            </div>
            <div className="card-img">
                <img src={props.src} alt={props.alt}/>
            </div>
        </div>
    )
}