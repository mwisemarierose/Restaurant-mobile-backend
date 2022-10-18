import express from "express";
import { AddFood } from "../controllers/cartController.js";
import { adminAuth } from "../middlewares/protectRoute.js";

const routes=express();

routes.post('/add',adminAuth,AddFood)


export default routes;