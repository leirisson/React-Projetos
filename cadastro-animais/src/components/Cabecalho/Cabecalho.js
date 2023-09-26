import './style.css'
import '../Barra/index.js'
export const Cabecalho = (props) => {
    const itenMenu = ['Home', 'Avaliações', 'Configurações','Logout','Painés']
    return(
        <div  className="container">
            <div>
            <img  src={props.src} className="logo" alt={props.alt}/>
            <img  src={props.src} className="logo" alt={props.alt}/>
            </div>

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