import Card from '../Card';
import './Time.css'

const Time = (props) => {

    return(
        props.colaboradores.length > 0 && <section className='time' style={{backgroundColor: props.time.cor_s}}>
            <h3 style={{borderColor: props.time.cor_p}}>{props.time.nome}</h3>
            <div className='card'>
                {props.colaboradores.map((colaborador => <Card 
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                />))}
            </div>
        </section>
    );
}

export default Time;