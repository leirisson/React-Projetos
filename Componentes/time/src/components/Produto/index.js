import './style.css'
const Produto = ({nome, descricao, preco, url}) =>{
    return(
        <div className='produto'>
            
            <div className='cabecalho'>
                <img src={url}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{descricao}</h5>
                <p>Preço: R$ {preco}</p>
            </div>
        </div>
    )
}
export default Produto