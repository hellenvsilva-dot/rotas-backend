import { Amostra } from "../model/Amostra.js";
import { cadatrar, listar, buscarPorIndice, deletar } from "../repository/amostraRepository.js";

export function cadastraAmostra(req, res){
    const{codigo, material, origem, resultado} = req.body;

    const amostra = new Amostra(codigo, material, origem, resultado);

    cadatrar(amostra);

    res.status(201).json(amostra);
}

export function listarAmostras(req, res){
    const amostras = listar();
    res.status(200).json(amostras);
}

export function buscarAmostra(req, res){
    const indice = Number(req.parms,indice);

    const amostra = buscarPorIndice(indice);

    if (!amostra){
        return res.status(404).json({
            mensagem: "Amostra não encontrada"
        });
    }

    res.status(200).json(amostra);
}

export function deletarAmostra(req, res){
    const indice = Number(req.parms.indice);

    const amostra = buscarAmostra(indice);

    if(!amostra){
        return res.status(404).json({
            mensagem: "Amostra não encontrada"
        });
    }

    deletar(indice);

    res.status(200).json({
        mensagem: "Amostra excluida com sucesso"
    });
}