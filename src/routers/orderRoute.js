import express from "express";
import verifyLogin from "../middlewares/protectRoute.js";
import { makeOrder } from "../controllers/orderController.js";

const routes=express();

routes.post('/order',verifyLogin,makeOrder)

export default routes;