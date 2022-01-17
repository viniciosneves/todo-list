import { selector } from "recoil";
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