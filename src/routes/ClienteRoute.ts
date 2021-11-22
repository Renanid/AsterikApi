import { Router } from "express";
import { listClientes } from "../controller/ClienteController";
import { saveCliente } from "../controller/ClienteController";
import { getCliente } from "../controller/ClienteController";
import { updateCliente } from "../controller/ClienteController";
import { deleteCliente } from "../controller/ClienteController";

const routesCliente = Router();

routesCliente.get("/clientes", listClientes);
routesCliente.post("/cliente", saveCliente);
routesCliente.get("/cliente/:id", getCliente);
routesCliente.put("/cliente/:id", updateCliente);
routesCliente.delete("/cliente/:id", deleteCliente);

export default routesCliente;
