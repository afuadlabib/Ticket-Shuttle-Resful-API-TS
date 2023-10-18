import { Router } from "express";

const router = Router()

router.get("/api", (req, res) =>{
    console.log("masuk")
    res.send("Ok")
})

export default router