import { Router } from "express";
import { postLogin } from "../controller/LoginController";
import { getRecuperao } from "../controller/LoginController";

const routesLogin = Router();

routesLogin.post("/login", postLogin);
routesLogin.get("/login/recuperacao", getRecuperao);

export default routesLogin;
