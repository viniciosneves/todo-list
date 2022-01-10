import React from 'react';
import { ITarefa } from '../../interfaces/ITarefa';
import style from './Cabecalho.module.scss';

const Cabecalho: React.FC<{ tarefas: ITarefa[] }> = ({ tarefas }) => {

  const hoje = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })

  let titulo = 'Nenhuma tarefa na lista'

  if (tarefas.length === 1) {
    titulo = '1 tarefa'
  } else if (tarefas.length > 1) {
    titulo = `${tarefas.length} tarefas`

  }

  return (<div className={style.Cabecalho}>
    <h1>{ hoje }</h1>
    <h2>{ titulo }</h2>
  </div>)

}

export default Cabecalho