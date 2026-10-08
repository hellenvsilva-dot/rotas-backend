import express from "express";
import { cadastrar, listar, buscar, deletar } from "../controller/amostraController.js";

const router = express();

router.post("/", cadastrar);
router.get("/", listar);
router.get("/:indice", buscar);
router.delete("/:indice", deletar);

export default router;




