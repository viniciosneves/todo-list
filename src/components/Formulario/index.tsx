import React, { useState } from 'react';
import { IEvento } from '../../interfaces/IEvento';
import style from './Formulario.module.scss';

const Formulario: React.FC<{ aoSalvar: (evento: IEvento) => void }> = ({ aoSalvar }) => {
  const [descricao, setDescricao] = useState('')
  const [data, setData] = useState('')
  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    aoSalvar({
      descricao,
      data: new Date(data),
      completo: false
    })
    setDescricao('')
    setData('')
  }
  return (<form className={style.Formulario} onSubmit={submeterForm}>

    <input 
      type="text" 
      name="descricao"
      className={style.input}
      onChange={evento => setDescricao(evento.target.value)} 
      placeholder="Descrição" value={descricao} 
      autoComplete="off"
      required />

    <input 
      type="date" 
      name="data"
      className={style.input}
      onChange={evento => setData(evento.target.value)} 
      placeholder="Data"
      value={data}
      required />

    <button className={style.botao}>
      Salvar
    </button>

  </form>)
}

export default Formulario