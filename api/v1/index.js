import express from "express";
import employeeController from "./controllers/employeeController.js";
import loginController from "./controllers/loginController.js";

const router = express.Router();
router.use("/employees", employeeController);
router.use("/login", loginController);
export default router;
