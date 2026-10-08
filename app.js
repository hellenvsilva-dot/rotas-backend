import express from "express";
import amostraRoute from "./routes/amostraRoute.js"

const app = express();

app.use(express.json());

app.use("/amostras", amostraRoute);

app.listen(3001, () => {
    console.log("Sevidor rodando na porta 3001")
})
