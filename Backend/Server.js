import {createServer} from 'http';
import {Server} from "socket.io";
import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';


const app = express();
const server = createServer(app);
const io = new Server(server);

// Настройка CORS
app.use(cors());



const httpServer=createServer();
const io=new Server(httpServer,{
    cors:{
        origin:"*"
    }
});

httpServer.listen(3000,()=>{
    console.log("Server started on port 3000");
})