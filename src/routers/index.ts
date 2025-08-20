import type { Request, Response } from "express";
import { Router } from "express";

import { type LoginRequest} from "../types/index.ts";




export const router = Router();


router.get('/',(req:Request,res:Response)=>{
    res.send('hola mundo')
})

router.post('/login',(req:Request,res:Response)=>{

    const loginData: LoginRequest = req.body;

    res.send(loginData)
})


