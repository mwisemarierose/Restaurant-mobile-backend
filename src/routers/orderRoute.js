import express from "express";
import verifyLogin from "../middlewares/protectRoute";
import { makeOrder } from "../controllers/orderController";

const routes=express();

routes.post('/order',verifyLogin,makeOrder)

export default routes;