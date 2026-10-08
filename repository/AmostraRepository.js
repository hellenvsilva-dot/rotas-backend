const Amostra = []

export function  cadastrar(amostra) {
    amostras.push(amostra);
} 

export function listar(){
    return amostras;
}

export function BuscarPorIndice(indice){
     amostras[indice] = amostra;
}

export function deletar(indice){
    amostras.slipe(indice , 1);
}