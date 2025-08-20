import { Router } from "express";
import type { Request,Response } from "express";



export const router = Router();


router.get('/',(req:Request,res:Response)=>{
    res.send('hola mundo')
})

router.post('/login',(req:Request,res:Response)=>{

    const {username,password}=req.body
    
    console.log(username)

    res.send("hello")
})


