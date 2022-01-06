import React from 'react';
import { ITarefa } from '../../interfaces/ITarefa'
import style from './Tarefa.module.scss';

const Tarefa: React.FC<{ tarefa: ITarefa }> = ({ tarefa }) => {
  
  const estilos = [
    style.Tarefa
  ]

  if (tarefa.completa) {
    estilos.push(style.completa)
  }

  return (<div className={estilos.join(' ')}>

    { tarefa.completa ? <i className="far fa-check-square fa-2x"></i> : <i className="far fa-square fa-2x"></i> }
    <div className="cards-info">
      <h3 className={style.descricao}>{tarefa.descricao}</h3>
    </div>
    <i className="far fa-times-circle fa-2x"></i>
  </div>)
}

export default Tarefa