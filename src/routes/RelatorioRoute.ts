import { Router } from "express";
import { listRelatorios } from "../controller/relatoriosController";
import { saveRelatorio } from "../controller/relatoriosController";
import { getRelatorio } from "../controller/relatoriosController";
import { updateRelatorio } from "../controller/relatoriosController";
import { deleteRelatorio } from "../controller/relatoriosController";

const routesRelatorio = Router();

routesRelatorio.get("/relatorios", listRelatorios); 
routesRelatorio.post("/relatorio", saveRelatorio);
routesRelatorio.get("/relatorio/:id", getRelatorio); 
routesRelatorio.put("/relatorio/:id", updateRelatorio); 
routesRelatorio.delete("/relatorio/:id", deleteRelatorio);

export default routesRelatorio;
