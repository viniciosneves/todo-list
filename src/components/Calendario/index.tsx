
import React from 'react'
import Calendar, { CalendarTileProperties } from 'react-calendar'
import style from './Calendario.module.scss';
import { IEvento } from '../../interfaces/IEvento';
import 'react-calendar/dist/Calendar.css';

const Calendario: React.FC<{ eventos: IEvento[] }> = ({ eventos }) => {
  const conteudoCalendario = ({ date } : CalendarTileProperties) => {
    const possuiEvento = eventos.find( evento => date.toISOString().slice(0, 10) === evento.data.toISOString().slice(0, 10) ) 
    return possuiEvento ? style.active : ''
  }
  return (
    <div className={style.Container}>
      <Calendar tileClassName={conteudoCalendario} locale="pt-BR" />
    </div>
  );
}

export default Calendario