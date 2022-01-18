import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaEventosState } from "../atom";


const useAdicionarEvento = () => {
  const setListaEventos = useSetRecoilState<IEvento[]>(listaEventosState);

  
  return (evento: IEvento) => {
    const hoje = new Date()
  
    if (evento.inicio < hoje) {
      throw new Error('Eventos com data retroativas não serão aceitos!')
    }
    setListaEventos((listaAntiga) => [
      ...listaAntiga,
      evento
    ])
  }
}

export default useAdicionarEvento