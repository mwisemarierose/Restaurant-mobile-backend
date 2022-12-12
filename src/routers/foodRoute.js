import express from "express";
import { createItem ,getAllproduct ,getProduct ,deleteproduct } from "../controllers/foodController.js";
import upload from "../helpers/multer.js";
import { adminAuth } from "../middlewares/protectRoute.js";

const routes=express();


routes.post('/add', upload.single("thumb") ,createItem)
routes.get('/getAll',getAllproduct)
routes.get("/getOne/:_id",getProduct )
routes.get("/getOne/:_id",getProduct )
routes.delete("/deleteOne/:_id",deleteproduct )





export default routes;
