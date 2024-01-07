import { useState } from 'react';
import Banner from './components/Banner'
import Formulario from './components/Formulario';
import Time from './components/Times';

function App() {
  const [colaboradores, setColaboradores] = useState([])
  const times = [
    {
      nome:'Programação',
      cor_p:'#57C278',
      cor_s:'#D9F7E9'
    },
    {
      nome:'Front-End',
      cor_p:'#82CFFA',
      cor_s:'#E8F8FF'
    },
    {
      nome:'Data Science',
      cor_p:'#A6D157',
      cor_s:'#F0F8E2'
    },
    {
      nome:'Devops',
      cor_p:'#E06B69',
      cor_s:'#FDE7E8'
    },
    {
      nome:'UX e Desing',
      cor_p:'#DB6EBF',
      cor_s:'#FAE9F5'
    },
    {
      nome:'Mobile',
      cor_p:'#FFBA05',
      cor_s:'#FFF5D9'
    },
    {
      nome:'Inovação e Gestão',
      cor_p:'#FF8A29',
      cor_s:'#FFEEDF'
    }
  ]

  const adicionarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time=>time.nome)} aoColaboradorCadastrado = {colaborador => adicionarColaborador(colaborador)}/>
      {times.map(time=> <Time 
      key={time.nome}
      time={time}
      colaboradores = {colaboradores.filter(colaborador=>colaborador.time === time.nome)}

      />)}
    </div>
  );
}

export default App;
