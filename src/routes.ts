import { Router } from "express";

import LoginRoute from "./routes/LoginRoute";
import ClienteRoute from "./routes/ClienteRoute";
import FuncionarioRoute from "./routes/FuncionarioRoute";
import QuartoRoute from "./routes/QuartoRoute";
import CheckRoute from "./routes/CheckRoute";
import RelatorioRoute from "./routes/RelatorioRoute";

const routes = Router();

routes.use("/", LoginRoute);
routes.use("/", ClienteRoute);
routes.use("/", FuncionarioRoute);
routes.use("/", QuartoRoute);
routes.use("/", CheckRoute);
routes.use("/", RelatorioRoute);

export default routes;
