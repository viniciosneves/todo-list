import React from 'react';
import Tarefa from '../Tarefa';
import style from './ListaDeTarefas.module.scss';

const ListaDeTarefas: React.FC = ({ children }) => {
  const tarefas = [
    {
      id: 1,
      descricao: 'Estudar React',
      completa: false
    },
    {
      id: 2,
      descricao: 'Estudar TypeScript',
      completa: true
    },
    {
      id: 3,
      descricao: 'Estudar Testes',
      completa: false
    }
  ]
  return (<section>
    {tarefas.map(tarefa => (
      	<Tarefa tarefa={tarefa} key={tarefa.id}/>
    ))}
  </section>)
}

export default ListaDeTarefas