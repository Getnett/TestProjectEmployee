import mongoose from "mongoose";
const employeeSchema = mongoose.Schema(
  {
    name: String,
    born: String,
    gender: String,
    salary: String,
  },
  { timestamps: true }
);

const EmployeeData = mongoose.model("employeeData", employeeSchema);
export default EmployeeData;
