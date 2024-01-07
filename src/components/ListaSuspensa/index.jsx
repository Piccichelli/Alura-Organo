import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    const aoSelecionado = (e) => {
        props.aoAlterado(e.target.value);
    }

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={aoSelecionado} value={props.valor} placeholder = "Selecione seu time">
                {props.itens.map((item) => {
                    return(
                        <option key={item}>{item}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;