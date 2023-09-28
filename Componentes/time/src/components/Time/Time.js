import './style.css'
export const Time = (props) => {
    return (
        <section className="time">
            <h3>{props.texto}</h3>
            <div className='produtos'>
                {props.children}
            </div>
            
        </section>
    )
}