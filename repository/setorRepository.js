const Setores = []

export function  cadastrar(setor) {
    Setores.push(setor);
} 

export function listar(){
    return setores;
}

export function BuscarPorIndice(indice){
    return setor[indice];
}

export function deletar(indice){
    setores.slipe(indice , 1);
}

export function atualizar(indice , setor){
    setores[indice] = setor;
    
}