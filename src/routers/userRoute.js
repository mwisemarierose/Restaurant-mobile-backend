import express from "express";
import {signup ,getAllUsers ,signin,updateProfile ,deleteUser} from "../controllers/userController.js";
import {adminLogin }from "../controllers/adminController.js"

const routes=express();

routes.post('/signup',signup)
routes.post('/signin',signin)
routes.get('/getAll',getAllUsers)
routes.patch('/update/:_id', updateProfile)
routes.delete('/delete/:_id', deleteUser)
routes.post("/login",adminLogin)



export default routes;
