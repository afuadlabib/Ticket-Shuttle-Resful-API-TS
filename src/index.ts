import express, { Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';

const app: any = express()
const port: number = 5050

app
    .use(cors<Request>())
    .use(express.urlencoded({extended: true}))
    .use(express.json())
    .get("/", (req: Request,res: Response ): any =>{
        res.status(200).send("Welcome to Restful api")
    })
    // .use(routes)

    .listen(port, (): void => {
        console.log(`Server running on port: ${port}`)
    })
export default app