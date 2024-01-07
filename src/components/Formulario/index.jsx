import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {
    
    
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('Programação');

    const aoSalvar = (e) => {
        e.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    value = {nome} 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    aoAlterado={component_event => setNome(component_event)} 
                />
                <CampoTexto 
                    value = {cargo} 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    aoAlterado={component_event => setCargo(component_event)} 
                />
                <CampoTexto 
                    value = {imagem}
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    aoAlterado={component_event => setImagem(component_event)}
                />
                <ListaSuspensa 
                    value={time}
                    label="Time"
                    itens={props.times}
                    aoAlterado={component_event => setTime(component_event)} />
                <Botao texto="Criar card"/>
            </form>
        </section>
    )
}

export default Formulario;