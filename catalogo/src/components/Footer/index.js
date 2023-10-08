import './style.css'

const Footer = () =>{
    return(
        <footer className="rodape">
            <di  className="whatsapp">
                <a href="https://api.whatsapp.com/send/?phone=%2B5597991539722&text&type=phone_number&app_absent=0">
                <img src="whatsapp.png" alt="icone whatsapp"/>
                </a>
            </di>
            <div  className="instagram">
            <a href="https://www.instagram.com/antoniobarbearia_/">
                <img src="instagram.png" alt="icone instagram"/> 
            </a>
            </div>
            
            <div className="youtube">
            <a href="https://www.youtube.com/@foxformenoficial6513">
                <img src="youtube.png" alt="icone youtube"/>
                </a>
            </div>
            <div className="facebook">
            <a href="https://www.facebook.com/antony.cleandro">
            <img src="facebook.png" alt="icone whatsapp"/>
                 </a>
            
            </div>

        </footer>
    )
}

export default Footer