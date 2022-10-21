import express from "express";
import {signup ,getAllUsers ,signin,updateProfile} from "../controllers/userController.js";

const routes=express();

routes.post('/signup',signup)
routes.post('/signin',signin)
routes.get('/getAll',getAllUsers)
routes.patch('/update/:id', updateProfile)


export default routes;
