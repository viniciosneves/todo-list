import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IEventoFiltro } from "../interfaces/IEventoFiltro";
// import { eventosAsyncSelector } from "./selectors";

export const listaEventosState = atom<IEvento[]>({
  key: "listaEventosState",
  default: [],
});

export const listaEventosFiltroState = atom<IEventoFiltro>({
  key: "listaEventosFiltroState",
  default: {},
});
