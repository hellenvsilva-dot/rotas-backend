import express from "express";
import { cadastraSetor, listarSetor, buscarSetor, deletarSetor  
    , atualizarSetor
 } from "../controller/setorController.js";

const router = express();

router.post("/", cadastraSetor);
router.get("/", listarSetor);
router.get("/:indice",  buscarSetor);
router.delete("/:indice", deletarSetor);
router.patch("/:indice", atualizarSetor );

export default router;

