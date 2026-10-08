import express from "express";
import AmostraRoute from "./routes/AmostraRoute.js"
import setorRoute from "./routes/setorRoute.js"

const app = express();

app.use(express.json());

app.use("/amostras", AmostraRoute);

app.listen(3001, () => {
    console.log("Sevidor rodando na porta 3001")
}
)  

app.use("/setores", setorRoute);

app.listen(3001, () => {
    console.log("Sevidor rodando na porta 3001")
}
)
