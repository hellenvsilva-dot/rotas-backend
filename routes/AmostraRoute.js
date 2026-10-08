import express from "express";
import { cadastraAmostra, listarAmostras, buscarAmostra, deletarAmostra  
    , atualizarAmostra
 } from "../controller/amostraController.js";

const router = express();

router.post("/", cadastraAmostra);
router.get("/", listarAmostras);
router.get("/:indice", buscarAmostra);
router.delete("/:indice", deletarAmostra);
router.patch("/:indice", atualizarAmostra );

export default router;




