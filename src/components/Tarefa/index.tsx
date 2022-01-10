import React from 'react';
import { ITarefa } from '../../interfaces/ITarefa'
import style from './Tarefa.module.scss';
import TarefaCheckbox from './TarefaCheckbox';

const Tarefa: React.FC<{ tarefa: ITarefa, aoAlterarStatus: (id: number) => void, aoDeletarTarefa: (id: number) => void }> = ({ tarefa, aoAlterarStatus, aoDeletarTarefa }) => {
  
  const estilos = [
    style.Tarefa
  ]

  if (tarefa.completa) {
    estilos.push(style.completa)
  }

  return (<div className={estilos.join(' ')}>

    <TarefaCheckbox tarefa={tarefa} aoAlterarStatus={aoAlterarStatus}/>
    <div className="cards-info">
      <h3 className={style.descricao}>{tarefa.descricao}</h3>
    </div>
    <i className="far fa-times-circle fa-2x" onClick={() => aoDeletarTarefa(tarefa.id)}></i>
  </div>)
}

export default Tarefa