import React from 'react';
import style from './App.module.scss';
import Card from './components/Card';
import Cabecalho from './components/Cabecalho';
import Formulario from './components/Formulario';
import ListaDeTarefas from './components/ListaDeTarefas';

function App() {
  return (
    <div className={style.App}>

      <Card>
        <Cabecalho />
        <Formulario />
        <ListaDeTarefas />
      </Card>
     
    </div>
  );
}

export default App;
