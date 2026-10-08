import { Setor } from "../model/setor.js"
import { cadastrar , atualizar , deletar , listar , BuscarPorIndice} from "../repository/AmostraRepository.js";


export function cadastraSetor(req, res){
    const{nome , sigla , responsavel , ramal} = req.body;

    console.log(sigla);

    const setor = new Setor(nome , sigla , responsavel , ramal);

    console.log(setor.sigla);

    cadastrar(setor);

    res.status(201).json(setor);
}

export function listarSetor(req, res){
    const setores = listar();
    res.status(200).json(setores);
}

export function buscarSetor(req, res){
    const indice = Number(req.params.indice);

    const setor = BuscarPorIndice(indice);

    if (!setor){
        return res.status(404).json({
            mensagem: "Setor não encontrado"
        });
    }

    res.status(200).json(setor);
}

export function deletarSetor(req, res){
    const indice = Number(req.params.indice);

    const setor = BuscarPorIndice(indice);

    if(!setor){
        return res.status(200).json({
            mensagem: "Setor não encontrado"
        });
    }

    deletar(indice);

    res.status(200).json({
        mensagem: "Setor excluido com sucesso"
    });
}

export function atualizarSetor(req, res){
    const indice = Number(req.params.indice);


    const setor = BuscarPorIndice(indice);


    if(!setor){
        return res.status(404).json({
            mensagem: "setor não encontrado"
        });
    }


    const {nome , sigla , responsavel , ramal } = req.body;


    if (codigo !== undefined) {
        Setor.nome = nome;
    }
    if (material !== undefined) {
        Setor.sigla = sigla;
    }
    if (origem !==undefined) {
        Setor.responsavel = responsavel;
    }
    if (resultado !== undefined) {
        Setor.ramal = ramal;
    }


    atualizar(indice, setor);


    res.status(200).json(setor);
}

