import express from "express";
import { createrequest } from "../controllers/requestController.js";

const routes=express();

routes.post('/send',createrequest)


export default routes;