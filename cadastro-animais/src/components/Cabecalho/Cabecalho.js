import './style.css'
export const Cabecalho = (props) => {
    const itenMenu = ['Home', 'Avaliações', 'Configurações','Logout','Painés']
    return(
        <div  className="container">
            <img  src={props.src} className="logo" alt={props.alt}/>
            <ul className="menu-lista">
                {itenMenu.map(item => {
                    return (
                        <li className="menu-lista-item" key={item}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}