import express from "express";
import { createItem } from "../controllers/foodController.js";
import upload from "../helpers/multer.js";
import { adminAuth } from "../middlewares/protectRoute.js";

const routes=express();


routes.post('/add', upload.single("thumb") ,createItem)


export default routes;
