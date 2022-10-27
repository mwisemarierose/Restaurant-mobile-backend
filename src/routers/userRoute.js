import express from "express";
import {signup ,getAllUsers ,signin,updateProfile ,deleteUser} from "../controllers/userController.js";

const routes=express();

routes.post('/signup',signup)
routes.post('/signin',signin)
routes.get('/getAll',getAllUsers)
routes.patch('/update/:_id', updateProfile)
routes.delete('/delete/:_id', deleteUser)




export default routes;
