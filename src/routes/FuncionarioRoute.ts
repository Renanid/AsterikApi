import { Router } from "express";
import { listFuncionarios } from "../controller/FuncionarioController";
import { saveFuncionario } from "../controller/FuncionarioController";
import { getFuncionario } from "../controller/FuncionarioController";
import { updateFuncionario } from "../controller/FuncionarioController";
import { deleteFuncionario } from "../controller/FuncionarioController";

const routesFuncionario = Router();

routesFuncionario.get("/funcionarios", listFuncionarios); //404 - Nenhum registro foi encontrado!
routesFuncionario.post("/funcionario", saveFuncionario); //424 - Não foi possível cadastrar esse funcionário!
routesFuncionario.get("/funcionario/:id", getFuncionario); //404 - Funcionário não encontrado!
routesFuncionario.put("/funcionario/:id", updateFuncionario); //404 - Funcionário não encontrado!
routesFuncionario.delete("/funcionario/:id", deleteFuncionario); //200 - Funcionário excluído com sucesso! | 404 - Funcionário não encontrado!

export default routesFuncionario;
