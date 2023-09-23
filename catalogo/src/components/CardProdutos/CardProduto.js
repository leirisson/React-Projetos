import "./style.css"
export const CardProduto = (props) => {
    return(
        <div className="card">
            <div className="card-descricao">
                    <h3 className="card-descricao-titulo">{props.titulo}</h3>
                    <p className="card-descricao-produto">{props.descricao}</p>
                    <p className="card-descricao-preco">{props.preco}</p>
            </div>
            <div className="card-img">
                <img src={props.src} alt={props.alt}/>
            </div>
        </div>
    )
}