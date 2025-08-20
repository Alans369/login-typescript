// src/index.ts
import  express  from "express";
import type { Request,Response } from "express";
import "reflect-metadata" 

import {router} from "./routers/index.ts";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/',router)



app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});