import './Menu.css'

function Menu(){

return(
    <header className="cabecalho">
        <div className="logo">
            <img src="/imagens/logo-semFundo.png" alt="logo da barbearia"/>
        </div>

        <ul className="lista__Menu">
            <li className="lista__menu-item">Home</li>
            <li className="lista__menu-item">Sobre</li>
            <li className="lista__menu-item">Info</li>
        </ul>

    </header>
)

}

export default Menu