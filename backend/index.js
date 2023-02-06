import express from "express";
import cors from "cors";
import session from "express-session"
import dotenv from "dotenv"
dotenv.config();

const app = express();
app.use(cors({
    credentials:true,
    origin:"http://localhost:3000"
}))
app.use(express.json())

app.listen(process.env.APP_PORT,()=>{
    console.log("server up and running...")
})