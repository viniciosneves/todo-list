import React, { useState } from 'react';
import style from './Formulario.module.scss';

const Formulario: React.FC<{ aoSalvar: (nome: string) => void }> = ({ aoSalvar }) => {
  const [descricao, setDescricao] = useState('')
  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    aoSalvar(descricao)
    setDescricao('')
  }
  return (<form className={style.Formulario} onSubmit={submeterForm}>

    <input 
      type="text" 
      name="task" className={style.input} onChange={evento => setDescricao(evento.target.value)} 
      placeholder="Adicionar nova tarefa" value={descricao} 
      autoComplete="off" />

    <button className={style.botao}>
      Salvar
    </button>

  </form>)
}

export default Formulario