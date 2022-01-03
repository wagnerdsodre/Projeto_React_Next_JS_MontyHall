import PortaModel from "../model/porta";


export function CriarPortas(qtde: number, portaComPresente: number):PortaModel[]{
  return Array.from({ length: qtde }, (_,i) => {
    const numero = i + 1
    const temPresente = numero === portaComPresente
    return new PortaModel(numero, temPresente)
  })
}


export function atualizarportas(portas:PortaModel[],portaModificada: PortaModel){
return portas.map(portaAtual =>{
  const igualmodificada = portaAtual.numero === portaModificada.numero
  if(igualmodificada){
     return portaModificada
  }else{
    return portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
  }
})
}