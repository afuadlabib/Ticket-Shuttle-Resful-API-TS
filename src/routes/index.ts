import { Router, Request, Response } from "express";

const router: any = Router()

router.get("/api", (req: Request , res: Response) =>{
    console.log("masuk")
    res.send("Ok")
})

export default router