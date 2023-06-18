import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'time A',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'time B',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'time C',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'time D',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7D8'
    },
    {
      nome: 'time E',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'time F',
      corPrimaria: '#FFBAD5',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'time G',
      corPrimaria: '#FFBA29',
      corSecundaria: '#FFEEDF'
    }

  ];

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />

      {times.map(time => <Time
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

    </div>
  );
}

export default App;
