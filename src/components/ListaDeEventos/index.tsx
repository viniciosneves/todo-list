import React from 'react';
import useListaDeEventosFiltrados from '../../state/hooks/useListaDeEventosFiltrados';
import Evento from '../Evento';
import Filtro from '../Filtro';
import style from './ListaDeEventos.module.scss';

const ListaDeEventos: React.FC = () => {
  const eventos = useListaDeEventosFiltrados();

  return (<section>
    <Filtro />
    <div className={style.Scroll}>
      {eventos.map(evento => (
        <Evento evento={evento} key={evento.id} />
      ))}
    </div>
  </section>)
}

export default ListaDeEventos