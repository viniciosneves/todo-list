import React from 'react';
import style from './Cabecalho.module.scss';

const Cabecalho: React.FC = () => {

  const hoje = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })

  return (<div className={style.Cabecalho}>
    <h1>{ hoje }</h1>
    <h2>3 Tarefas</h2>
  </div>)

}

export default Cabecalho