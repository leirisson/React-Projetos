import "./style.css"
export const Banner = (props) => {
    return (
        <div className="banner">
            <div className="descricao">
            <h3 className="banner-titulo"> {props.titulo} </h3>
            <p className="banner-texto">{props.descricao}</p>
            </div>
            <img className="img-banner" src={props.src} alt={props.alt}/>
        </div>
        
    )
}

