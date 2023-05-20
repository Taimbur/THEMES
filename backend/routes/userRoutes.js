import express from "express";


import { createTour ,getTour} from "../controller/userController.js";
const router = express.Router();



router.post("/", createTour);
router.get("/", getTour);


export default router;