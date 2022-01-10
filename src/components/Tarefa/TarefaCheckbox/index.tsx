import React from 'react';
import { ITarefa } from '../../../interfaces/ITarefa';

const TarefaCheckbox: React.FC<{ tarefa: ITarefa, aoAlterarStatus: (id: number) => void }> = ({ tarefa, aoAlterarStatus }) => {
  
  const estilos = [
    'far',
    'fa-2x',
    tarefa.completa ? 'fa-check-square' : 'fa-square'
  ]

  return (<i className={estilos.join(' ')} onClick={() => aoAlterarStatus(tarefa.id)}></i>)
}

export default TarefaCheckbox