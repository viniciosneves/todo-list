import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaEventosState } from "../atom";


const useAtualizarEvento = () => {
  const setListaEventos = useSetRecoilState<IEvento[]>(listaEventosState);

  return (evento: IEvento) => {
    setListaEventos((eventos) => {
      const index = eventos.findIndex(evt => evt.id === evento.id)
      return [...eventos.slice(0, index), evento, ...eventos.slice(index + 1)]
    })
  }
}

export default useAtualizarEvento