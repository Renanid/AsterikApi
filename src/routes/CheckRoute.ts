import { Router } from "express";

import { listCheck } from "../controller/CheckController";
import { saveCheck } from "../controller/CheckController";
import { getCheck } from "../controller/CheckController";
import { updateCheck } from "../controller/CheckController";
import { deleteCheck } from "../controller/CheckController";

const routesCheck = Router();

routesCheck.get("/checks", listCheck);
routesCheck.post("/check", saveCheck);
routesCheck.get("/check/:id", getCheck);
routesCheck.put("/check/:id", updateCheck);
routesCheck.delete("/check/:id", deleteCheck);

export default routesCheck;
