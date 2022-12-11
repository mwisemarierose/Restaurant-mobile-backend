import express from "express";
import bodyParser from "body-parser";
import mongoConnect from './src/config/db.config.js'
import userRouter from "./src/routers/userRoute.js";
import orderRouter from './src/routers/orderRoute.js'
import foodRouter from './src/routers/foodRoute.js'
import requestRouter from './src/routers/requestRoute.js'
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
app.use("/request", requestRouter);




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