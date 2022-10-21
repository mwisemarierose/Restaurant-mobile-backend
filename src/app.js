import express from "express";
import bodyParser from "body-parser";
import mongoConnect from './config/db.config.js'
import userRouter from "./routers/userRoute.js";
import orderRouter from './routers/orderRoute.js'
import foodRouter from './routers/foodRoute.js'
import dotenv from 'dotenv'
dotenv.config()

const port= 3000 ;


const app= express();
mongoConnect();

app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

app.use("/users", userRouter);
app.use("/order", orderRouter);
app.use("/item", foodRouter);



app.get('/',(req,res) =>{
    res.status(200).json({
        message :"let's get started ",
        status:200
    })
});

app.use((req,res) =>{
    res.status(404).json({
        message:"endpoint not found",
        status:404
    })
})

app.listen(port,console.log(`server is running on http:/localhost:${port}`))