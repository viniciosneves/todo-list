import React, { useState } from 'react';
import style from './App.module.scss';
import Card from './components/Card';
import Formulario from './components/Formulario';
import { IEvento } from './interfaces/IEvento';
import Calendario from './components/Calendario';
import ListaDeEventos from './components/ListaDeEventos';

function App() {
  const [eventos, setEventos] = useState<IEvento[]>([])
  const [filtro, setFiltro] = useState<Date | null>()

  const adicionarEvento = (evento: IEvento) => {
    evento.id = Math.round((new Date()).getTime() / 1000)
    eventos.push(evento)
    setEventos([...eventos])
  }
  const alterarStatusEvento = (id: number) => {
    const evento = eventos.find(evento => evento.id === id)
    if (evento) {
      evento.completo = !evento.completo
    }
    setEventos([...eventos])
  }
  const deletarEvento = (id: number) => {
    setEventos([...eventos.filter(evento => evento.id !== id)])
  }

  const aplicarFiltro = (data: Date | null) => {
    setFiltro(data)
	}

  const filtrados = !filtro
    ? eventos
    : eventos.filter((evento) =>
        filtro!.toISOString().slice(0, 10) === evento.data.toISOString().slice(0, 10)
      ); 
  
  return (
    <div className={style.App}>

      <Card>
        <Formulario aoSalvar={adicionarEvento}/>
      </Card>

      <Card>
        <ListaDeEventos aoFiltroAplicado={aplicarFiltro} aoAlterarStatus={alterarStatusEvento} aoDeletarEvento={deletarEvento} eventos={filtrados}/>
      </Card>
      
      <Card>
        <Calendario eventos={eventos}/>
      </Card>
     
    </div>
  );
}

export default App;
