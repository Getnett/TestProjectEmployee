import mongoose from "mongoose";
import EmployeeData from "../models/employeeData.js";

export const getAllEmployees = async (req, res) => {
  try {
    const employeesData = await EmployeeData.find().sort({ createdAt: -1 });
    res.status(202).json(employeesData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const creatEmployee = async (req, res) => {
  const employee = req.body;
  const newEmployee = new EmployeeData(employee);
  try {
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updateEmployee = async (req, res) => {
  const { id: _id } = req.params;
  const employee = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No employee matched with this id");
  const updatedEmployee = await EmployeeData.findByIdAndUpdate(
    _id,
    { ...employee, _id },
    { new: true }
  );
  res.json(updatedEmployee);
};
export const removeEmployee = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No employee matched with this id");
  await EmployeeData.findByIdAndRemove(id);
  //  show number of posts after deletion
  res.json({ message: "Post deleted successfully" });
};
