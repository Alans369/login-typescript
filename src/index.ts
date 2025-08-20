// src/index.ts
import  express  from "express";
import type { Request,Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: '¡Hola con ES Modules!' });
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});