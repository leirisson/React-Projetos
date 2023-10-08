import "./style.css"
import CardProduto from "../CardProdutos"

const Titulo = (props, children) =>{
    return(
        <h1>{props.t1}  <span className="premium">{props.t2}</span></h1>
    )
}

export const Produto = (props) =>{
    return (
        <div className="produtos">
            <h1>Pomadas  <span className="premium">Premium</span></h1>
           

        <CardProduto 
        titulo="POMADA EFEITO TEIA"
        src=" https://i.ibb.co/89CDcrq/pomada-efeito-teia150-G.png"
        alt="Pomada caramelo com queratina 80G"
        />

        <CardProduto 
        titulo="POMADA NEW COFFE"
        src="https://i.ibb.co/h7MPvLm/pomada-coffe-150-G.png"
        alt="Pomada caramelo com queratina 80G"
        />

        <CardProduto 
        titulo="POMADA TOQUE SECO"
        src="https://i.ibb.co/mNs39wY/pomada-toque-seco-150-G.png"
        alt="Pomada caramelo com queratina 80G"
        />
       <CardProduto 
        titulo="POMADA HAIR"
        src="https://i.ibb.co/XyLsp8d/pomada-hair-150-G.png"
        alt="Pomada caramelo com queratina 80G"
        />
        <CardProduto 
        titulo="POMADA GREEN"
        src="https://i.ibb.co/VDY4XwV/pomada-premiun-green-150-G.png"
        alt="Pomada caramelo com queratina 80G"
        />
        <CardProduto 
        titulo="POMADA CARAMELO"
        src="https://i.ibb.co/7YBCTd0/pomada-caramelo-150-G.png"
        alt="Pomada caramelo com queratina 80G"
        />
        <CardProduto 
        titulo="POMADA BLACK"
        src="https://i.ibb.co/PZtXZfw/pomada-premiun-black-150-G.png"
        alt="Pomada PREMIUM BLACK 150 GRAMAS"
        />
        <CardProduto 
        titulo="POMADA BLACK"
        src="https://i.ibb.co/jGNdPdj/pomada-platinada-150-G.png"
        alt="Pomada PREMIUM platina 150 GRAMAS"
        />
        
        <Titulo t1="Pomadas" t2="80G"/>
        <CardProduto 
        titulo="POMADA CARAMELO"
        src="https://i.ibb.co/3rPzC55/Pomada-Caramelo-Com-Queratina80-G-removebg-preview.png"
        alt="Pomada PREMIUM platina 80 GRAMAS"
        />
        <CardProduto 
        titulo="POMADA EFEITO TEIA"
        src="https://i.ibb.co/VJNVvB1/Pomada-Efeito-Teia80-G-removebg-preview.png"
        alt="Pomada PREMIUM platina 80 GRAMAS"
        />
        <CardProduto 
        titulo="POMADA HAIR"
        src="https://i.ibb.co/DQSrzwq/Pomada-Hair80-G-removebg-preview.png"
        alt="Pomada PREMIUM platina 80 GRAMAS"
        />
         <CardProduto 
        titulo="POMADA TOQUE SECO"
        src="https://i.ibb.co/qCymWNF/Pomada-Toque-Seco80-G-removebg-preview.png"
        alt="Pomada PREMIUM platina 80 GRAMAS"
        />
        <CardProduto 
        titulo="POMADA COFFEE"
        src="https://i.ibb.co/dbg8qSz/Pomada-Black-Premium80-G-removebg-preview.png"
        alt="Pomada PREMIUM platina 80 GRAMAS"
        />
         <CardProduto 
        titulo="POMADA BLACK"
        src="https://i.ibb.co/b5mL6CF/Pomada-Coffe80-G-removebg-preview.png"
        alt="POMADA BLACK IMG"
        />
        <CardProduto 
        titulo="POMADA PREMIUM"
        src="https://i.ibb.co/5skYSdg/Pomada-Premium80-G-removebg-preview.png"
        alt="POMADA PREMIUM"
        />

        <CardProduto 
        titulo="POMADA EFEITO MATE"
        src="https://i.ibb.co/tJsWbdB/Pomada-Efeito-Matte80-G-removebg-preview.png"
        alt="POMADA EFEITO MATE"
        />


        {/* OUTROS PRODUTOS  */}
        <Titulo t1="Plus" t2="Product"/>
        <CardProduto 
        titulo="POMADA EM PÓ"
        src="https://i.ibb.co/pn4FC5t/001-Pomada-Em-Po-removebg-preview.png"
        alt="POMADA EM PÓ"
        />
        <CardProduto 
        titulo="GEL MEGA"
        src="https://i.ibb.co/1v5JJQ5/003-Gel-Mega-Fixacao-Extra-Fort-removebg-preview.png"
        alt="POMADA EM PÓ"
        />
        <CardProduto 
        titulo="GEL CERA"
        src="https://i.ibb.co/022nw2p/004-Gel-Cera-removebg-preview.png"
        alt="POMADA EM PÓ"
        />
        <CardProduto 
        titulo="GEL COLA"
        src="https://i.ibb.co/PC6Xb9x/002-Gel-Cola-300-G-e-300-G-removebg-preview.png"
        alt="POMADA EM PÓ"
        />
        <CardProduto 
        titulo="GEL BLACK"
        src="https://i.ibb.co/9ZSrdw7/005-Gel-Black-removebg-preview.png"
        alt="GEL BLACK"
        />
        <CardProduto 
        titulo="POMADA PREMIUM"
        src="https://i.ibb.co/Wkt7Vtb/006-Pomada-Premium300-G-removebg-preview.png"
        alt="PROMADA PREMIUM"
        />
        
        {/* OUTROS PRODUTOS SHAMPOO */}
        <Titulo t1=" " t2="Shampoo"/>
        <CardProduto 
        titulo="SHAMPOO ANTICASPA"
        src="https://i.ibb.co/fX1Xhw1/007-shampoo-anticaspa250-ML-removebg-preview.png"
        alt="PROMADA PREMIUM"
        />
        <CardProduto 
        titulo="SHAMPOO MATIZADOR"
        src="https://i.ibb.co/XC07rGw/008-Shampoo-Matizador300-ML-removebg-preview.png"
        alt="PROMADA PREMIUM"
        />
        <CardProduto 
        titulo="TÔNICO CAPILAR"
        src="https://i.ibb.co/NpH8Hxn/009-Tonico-Capilar100-ML-removebg-preview.png"
        alt="TONICO CAPILAR"
        />
     
        <CardProduto 
        titulo="SHAMPOO 3 EM 1"
        src="https://i.ibb.co/KV30ZBg/010-Sampoo-3-Em-1.png"
        alt="SHAMPOO 3 EM 1"
        />
        <CardProduto 
        titulo="GROOMING"
        src="https://i.ibb.co/N3vXVrx/011-Grooming-removebg-preview.png"
        alt="SHAMPOO 3 EM 1"
        />
        <CardProduto 
        titulo="HAIR SPRAY"
        src="https://i.ibb.co/ChPxZZF/012-Fix-Hair-Hair-Spray-removebg-preview.png"
        alt="HAIR SPRAY"
        />

        {/* OUTROS PRODUTOS SHAMPOO */}

        <Titulo t1="Face & " t2="Barba"/>
        <CardProduto 
        titulo="BALM PARA BARBA"
        src="https://i.ibb.co/r09DBCq/001-Balm-Para-Barba-removebg-preview.png"
        alt="HAIR SPRAY"
        />
        <CardProduto 
        titulo="LOÇÃO POS BARBA"
        src="https://i.ibb.co/88bRhP3/002-Locao-Pos-Barba-Verde-removebg-preview.png"
        alt="HAIR SPRAY"
        />
        <CardProduto 
        titulo="LOÇÃO POS BARBA"
        src="https://i.ibb.co/FWShKQR/003-Locao-Pos-Barba-Vermelha-removebg-preview.png"
        alt="HAIR SPRAY"
        />
        <CardProduto 
        titulo="CREME POS BARBA"
        src="https://i.ibb.co/QXCy7z1/004-Creme-Pos-Barba-removebg-preview.png"
        alt="HAIR SPRAY"
        />
        <CardProduto 
        titulo="ÓLE SPRAY MATTE BARBA"
        src="https://i.ibb.co/41sy3hL/005-Oleo-Spray-Matte-Oleo-Para-Barba-removebg-preview.png"
        alt="HAIR SPRAY"
        />
        <CardProduto 
        titulo="LIMAPADOR FACIAL"
        src="https://i.ibb.co/h8g1YCZ/006-Limpador-Facial-removebg-preview.png"
        alt="HAIR SPRAY"
        />

        {/* OUTROS PRODUTOS  */}
        <Titulo t1="Plus" t2="Product"/>
        <CardProduto 
        titulo="SHAVING EM CREME REFIL"
        src="https://i.ibb.co/9g405n5/013-Shaving-Em-Creme-Refil-removebg-preview.png"
        alt="HAIR SPRAY"
        />

        <CardProduto 
        titulo="SHAVING EM GEL REFIL"
        src="https://i.ibb.co/JskZSfK/014-Shaving-Em-Gel-Refil-removebg-preview.png"
        alt="HAIR SPRAY"
        />

        <CardProduto 
        titulo="TALCO DERMATOLÓGICO"
        src="https://i.ibb.co/WgF1NtQ/015-Talco-Dermatologico-removebg-preview.png"
        alt="HAIR SPRAY"
        />

        <CardProduto 
        titulo="RESFRIADOR DE LAMINA 6.1"
        src="https://i.ibb.co/zfBDgSX/016-Resfriador-De-Laminas-6-1-removebg-preview.png"
        alt="HAIR SPRAY"
        />

        <CardProduto 
        titulo="ALINHAMENTO AMERICANO"
        src="https://i.ibb.co/DGFw14h/017-Alinhamento-Americano-removebg-preview.png"
        alt="ALINHAMENTO AMERICANO"
        />
        
        <CardProduto 
        titulo="PÓ DESCOLORANTE"
        src="https://i.ibb.co/pngY0SF/018-Po-Descolorante-removebg-preview.png"
        alt="PÓ DESCOLORANTE"
        />

        <CardProduto 
        titulo="SHAMPOO NEUTRALIZANTE"
        src="https://i.ibb.co/vkbC24r/019-Shampoo-Neutralizante-removebg-preview.png"
        alt="PÓ DESCOLORANTE"
        />

        <CardProduto 
        titulo="DEFRIZANTE"
        src="https://i.ibb.co/44PmzDt/020-Defrizante-removebg-preview.png"
        alt="PÓ DESCOLORANTE"
        />

        <CardProduto 
        titulo="REDUTOR PROGRESSIVA"
        src="https://i.ibb.co/BTb1NLq/021-Redutor-Profressiva-removebg-preview.png"
        alt="REDUTOR PROGRESSIVA"
        />
        <CardProduto 
        titulo="OX 40 VOLUMES"
        src="https://i.ibb.co/jwkrkfw/022-OX-40-Volumes-removebg-preview.png"
        alt="REDUTOR PROGRESSIVA"
        />

        <CardProduto 
        titulo="REDUTOR PROGRESSIVA"
        src="https://i.ibb.co/6tZ0K8G/023-Redutor-Progressiva5-L-removebg-preview.png"
        alt="REDUTOR PROGRESSIVA"
        />

        <CardProduto 
        titulo="MAQUIAGEM CAPILAR"
        src="https://i.ibb.co/ZMxwQFc/024-Maquiagem-Capilar-removebg-preview.png"
        alt="MAQUIAGEM CAPILAR"
        />

        <CardProduto 
        titulo="SACHÊ MASCARA BLACK"
        src="https://i.ibb.co/VTBg8n3/025-Sache-Mascara-Black-removebg-preview.png"
        alt="MAQUIAGEM CAPILAR"
        />
        </div>
       
            
    
    )
}