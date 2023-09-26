import "./style.css"
export const Barra = (props) =>{
    const animaisDomesticos = [
        "Cachorro ",
        "Gato ",
        "Peixe ",
        "Pássaros ",
        "Coelho",
        "Tartaruga",
        "Hamster",
        "Porquinho-da-índia ",
        "Jabuti",
        "Papagaio",
        "Furão",
        "Galinha",
        "Pato",
        "Rato de estimação ",
        "Serpente ",
        "Cágado",
        "Lagarto",
        "Mini porco",
        "Cavalo ",
        "Cobra ",
        "Aranha",
        "Ouriço ",
        "Tarântula",
        "Sapo ",
        "Escorpião"
      ]
            
    return (
        <div className="container-animais">
            <ul className="lista-item">
                {animaisDomesticos.map(animal => <li className="item">{animal}</li>)}
            </ul>
        </div>
    )
}