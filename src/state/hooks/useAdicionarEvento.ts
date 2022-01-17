import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaEventosState } from "../atom";


const useAdicionarEvento = () => {
  const setListaEventos = useSetRecoilState<IEvento[]>(listaEventosState);

  return (evento: IEvento) => setListaEventos((listaAntiga) => [
    ...listaAntiga,
    evento
  ])
}

export default useAdicionarEvento