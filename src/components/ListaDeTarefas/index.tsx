import React from 'react';
import { ITarefa } from '../../interfaces/ITarefa';
import Tarefa from '../Tarefa';

const ListaDeTarefas: React.FC<{ tarefas: ITarefa[], aoAlterarStatus: (id: number) => void, aoDeletarTarefa: (id: number) => void }> = ({ tarefas, aoDeletarTarefa, aoAlterarStatus }) => {

  return (<section>
    {tarefas.map(tarefa => (
      <Tarefa aoAlterarStatus={aoAlterarStatus} aoDeletarTarefa={aoDeletarTarefa} tarefa={tarefa} key={tarefa.id} />
    ))}
  </section>)
}

export default ListaDeTarefas