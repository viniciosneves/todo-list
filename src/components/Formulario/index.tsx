import React from 'react';
import style from './Formulario.module.scss';

const Formulario: React.FC = ({ children }) => {
  return (<form className={style.Formulario}>
    <input type="text" name="task" className={style.input} placeholder="Adicionar nova tarefa" value="" autoComplete="off" />
    <button className={style.botao}>
      Salvar
    </button>
  </form>)
}

export default Formulario