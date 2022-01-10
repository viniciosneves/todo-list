import React, { useState } from 'react';
import style from './App.module.scss';
import Card from './components/Card';
import Cabecalho from './components/Cabecalho';
import Formulario from './components/Formulario';
import ListaDeTarefas from './components/ListaDeTarefas';
import { ITarefa } from './interfaces/ITarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([])

  const adicionarTarefa = (descricao: string) => {

    const tarefa = {
      id: Math.round((new Date()).getTime() / 1000),
      descricao,
      completa: false
    }
    tarefas.push(tarefa)
    setTarefas([...tarefas])
  }
  const alterarStatusTarefa = (id: number) => {
    const tarefa = tarefas.find(tarefa => tarefa.id === id)
    if (tarefa) {
      tarefa.completa = !tarefa.completa
    }
    setTarefas([...tarefas])
  }
  const deletarTarefa = (id: number) => {

    setTarefas([...tarefas.filter(tarefa => tarefa.id !== id)])
  }
  
  return (
    <div className={style.App}>

      <Card>
        <Cabecalho tarefas={tarefas}/>
        <Formulario aoSalvar={adicionarTarefa}/>
        <ListaDeTarefas aoAlterarStatus={alterarStatusTarefa} aoDeletarTarefa={deletarTarefa} tarefas={tarefas}/>
      </Card>
     
    </div>
  );
}

export default App;
