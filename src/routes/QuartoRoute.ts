import { Router } from "express";

import { listQuarto } from "../controller/QuartoController";
import { saveQuarto } from "../controller/QuartoController";
import { getQuarto } from "../controller/QuartoController";
import { updateQuarto } from "../controller/QuartoController";
import { deleteQuarto } from "../controller/QuartoController";
import { ListOcupacao } from "../controller/QuartoController";

const routesQuarto = Router();

routesQuarto.get("/quartos", listQuarto);
routesQuarto.post("/quarto", saveQuarto);
routesQuarto.get("/quarto/:id", getQuarto);
routesQuarto.put("/quarto/:id", updateQuarto);
routesQuarto.delete("/quarto/:id", deleteQuarto);
routesQuarto.get("/quartos/ocupacao", ListOcupacao);

export default routesQuarto;
