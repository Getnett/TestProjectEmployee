import express from "express";
import {
  getAllEmployees,
  creatEmployee,
  updateEmployee,
  removeEmployee,
} from "../controllers/employees.js";

const router = express.Router();

router.get("/", getAllEmployees);
router.post("/", creatEmployee);
router.patch("/:id", updateEmployee);
router.delete("/:id", removeEmployee);

export default router;
