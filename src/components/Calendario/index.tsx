
import React from 'react'
import style from './Calendario.module.scss';
import ptBR from './localizacao/ptBR.json'
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from 'kalend'
import 'kalend/dist/styles/index.css';
import useAtualizarEvento from '../../state/hooks/useAtualizarEvento';
import useListaDeEventosFiltrados from '../../state/hooks/useListaDeEventosFiltrados';

interface IKalendEvento {
  id?: number
  startAt: string
  endAt: string
  summary: string
  color: string
}

const Calendario: React.FC = () => {

  const eventos = useListaDeEventosFiltrados();
  const eventosKalend = new Map<string, IKalendEvento[]>();
  const atualizarEvento = useAtualizarEvento()

  const onEventDragFinish: OnEventDragFinish = (
    eventoOriginal: CalendarEvent,
    eventoAlterado: CalendarEvent
  ) => {
    atualizarEvento({
      id: eventoAlterado.id,
      inicio: new Date(eventoAlterado.startAt),
      fim: new Date(eventoAlterado.endAt),
      descricao: eventoAlterado.summary,
      completo: eventos.find(evt => evt.id === eventoAlterado.id)?.completo ?? false
    })
  };

  eventos.forEach(evento => {
    const chave = evento.inicio.toISOString().slice(0, 10)
    if (!eventosKalend.has(chave)) {
      eventosKalend.set(chave, [])
    }
    eventosKalend.get(chave)?.push({
      id: evento.id,
      startAt: evento.inicio.toISOString(),
      endAt: evento.fim.toISOString(),
      summary: evento.descricao,
      color: 'blue',
    })
  })
  return (
    <div className={style.Container}>
      <Kalend
        events={Object.fromEntries(eventosKalend)}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={'24'}
        weekDayStart={'Monday'}
        calendarIDsHidden={['work']}
        language={'customLanguage'}
        customLanguage={ptBR}
        onEventDragFinish={onEventDragFinish}
      />
    </div>
  );
}

export default Calendario