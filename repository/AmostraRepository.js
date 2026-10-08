const amostras = []

export function  cadastrar(amostra) {
    amostras.push(amostra);
} 

export function listar(){
    return amostras;
}

export function BuscarPorIndice(indice){
    return amostras[indice];
}

export function deletar(indice){
    amostras.slipe(indice , 1);
}

export function atualizar(indice , amostra){
    amostras[indice] = amostra;
    
}