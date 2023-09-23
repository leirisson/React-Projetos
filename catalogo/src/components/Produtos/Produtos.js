import "./style.css"
import CardProduto from "../CardProdutos"
import { Frame } from "../Frame/Frame"

export const Produto = () =>{
    return (
        <div className="produtos">
        <CardProduto 
        titulo="Pomada Caramelo com Queratina 80G"
        descricao="Feita à base de água para todos os tipos de cabelos.
        Com ela, você conseguirá modelar penteados e finalizar 
        o visual de forma natural e sem deixar resi- duos."
        preco="R$ 30,00"
        src="imagens/_Pomadas-SemFundo80G/PomadaCarameloComQueratina80G.png"
        alt="Pomada caramelo com queratina 80G"
        />
        <CardProduto 
        titulo="Pomada Efeito Teia 80G"
        descricao="É uma pomada estilizadora profissinal para finalizar o seu penteado."
        preco="R$ 25,00"
        src="
        imagens/_Pomadas-SemFundo80G/PomadaEfeitoTeia80G.png"
        alt="Pomada efeito teia 80G"
        />
        <CardProduto 
        titulo="Hair Pomade 80G"
        descricao="Com ela, você consiguirá modelar penteados e finalizar
        o visual de forma natural. "
        preco="R$ 25,00"
        src="imagens/_Pomadas-SemFundo80G/PomadaHair80G.png"
        alt="Hair Pomade 80G"
        />
        <CardProduto 
        titulo="Pomada Tique Seco"
        descricao=""
        preco=""
        src="
        imagens/_Pomadas-SemFundo80G/"
        alt=""
        />


       <CardProduto
        titulo="Pomada Black Premium 80G"
        descricao="Feita à base de água para todos os tipos de cabelos.
            Com ela, você conseguirá modelar penteados e finalizar 
            o visual de forma natural e sem deixar resi- duos."
        preco="R$ 25,00"
        src="imagens/_Pomadas-SemFundo80G/PomadaBlackPremium80G.png" 
        alt="PomadaBlackPremium80G"
       />


       <Frame frame={
        <iframe 
        width="300" 
        height="250" 
        src="https://www.youtube.com/embed/rUTg28WJ408?si=OhwYFfpD48OaCNRu" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>  
        </iframe>
       }/>
        </div>
    )
}