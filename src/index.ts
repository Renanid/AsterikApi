import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import cors from 'cors';
import routes from "./routes";
import bodyParser from "body-parser";

const app = express()
app.use(cors())

createConnection()

app.use(bodyParser.json())
app.use(routes)
 
app.listen(process.env.PORT || 3333, () => {
  console.log('Servidor em Execução');
});

