import express from "express";
import { createrequest, getrequest ,getAllrequest , confirmRequest , deleterequest} from "../controllers/requestController.js";

const routes = express();

routes.post("/send", createrequest);
routes.get("/getOne/:_id", getrequest);
routes.get("/getAll", getAllrequest);
routes.post("/confirm/:_id", confirmRequest);
routes.delete("/delete/:_id", deleterequest);






export default routes;
