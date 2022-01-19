import { selector } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaEventosFiltroState, listaEventosState } from "../atom";

export const eventosFiltradosState = selector({
  key: "eventosFiltradosState",
  get: ({ get }) => {
    const filtro = get(listaEventosFiltroState);
    const eventos = get(listaEventosState);

    if (!filtro.data) {
      return eventos
    }
    return eventos.filter((evento) => filtro.data!.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10))
  },
});

export const eventosAsyncSelector = selector({
  key: 'carregarEventos',
  get: async () => {
    const response = await fetch('http://localhost:8000/eventos');
    const eventos: IEvento[] = await response.json();
    return eventos.map(evento => ({
      ...evento,
      inicio: new Date(evento.inicio),
      fim: new Date(evento.fim)
    }))
  },
})