import express from "express";
import { 
    createrequest, 
    getrequest ,
    getAllrequest , 
    confirmRequest ,
     deleterequest ,
    updateRequest ,
    approvedRequest
} from "../controllers/requestController.js";
import { verifyLogin ,adminAuth} from "../middlewares/protectRoute.js";


const routes = express();

routes.post("/send", createrequest);
routes.get("/getOne/:_id", getrequest);
routes.get("/approved", approvedRequest);
routes.get("/getAll",adminAuth, getAllrequest);
routes.patch("/update/:_id", updateRequest);
routes.post("/confirm/:_id", confirmRequest);
routes.delete("/delete/:_id", deleterequest);




export default routes;
