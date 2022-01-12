import React from 'react';
import { IEvento } from '../../interfaces/IEvento';
import Evento from '../Evento';
import Filtro from '../Filtro';

const ListaDeEventos: React.FC<{ 
  eventos: IEvento[], 
  aoAlterarStatus: (id: number) => void, 
  aoDeletarEvento: (id: number) => void, 
  aoFiltroAplicado: (data: Date | null) => void }> = ({ eventos, aoDeletarEvento, aoAlterarStatus, aoFiltroAplicado }) => {

  return (<section>
    <Filtro aoFiltroAplicado={aoFiltroAplicado} />
    {eventos.map(evento => (
      <Evento aoAlterarStatus={aoAlterarStatus} aoDeletarEvento={aoDeletarEvento} evento={evento} key={evento.id} />
    ))}
  </section>)
}

export default ListaDeEventos