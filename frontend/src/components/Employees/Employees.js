import React from "react";
import Employee from "./Employee/Employee";
import { useSelector } from "react-redux";
const Employees = ({ setCurEmployeeId }) => {
  const employees = useSelector((state) => state.employees);
  console.log("what", employees);

  return (
    <div>
      {!employees.length ? (
        <div>
          <h2 style={{ marginLeft: "300px" }}>Add Employee...</h2>
        </div>
      ) : (
        employees.map((emp) => {
          return (
            <Employee
              key={emp._id}
              employee={emp}
              setCurEmployeeId={setCurEmployeeId}
            />
          );
        })
      )}
    </div>
  );
};

export default Employees;
