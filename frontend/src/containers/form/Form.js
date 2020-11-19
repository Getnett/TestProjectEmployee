import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createEmployee,
  updateEmployee,
} from "../../redux-store/actions/actions";

import style from "./Form.module.css";
import styled from "styled-components";
const StyledButton = styled.button`
  display: inline-block;
  margin-top: 0.5rem;
  margin-bottom: 0.8rem;
  padding: 0.2rem 1.2rem;
  background-color: #3c873a;
  color: white;
  border: transparent;
  border-radius: 0.2rem;
`;
const Form = ({ curEmployeeId, setCurEmployeeId }) => {
  const [employeeData, setEmployeeData] = useState({
    name: "",
    born: "",
    gender: "",
    salary: "",
  });
  const employee = useSelector((state) =>
    curEmployeeId
      ? state.employees.find((red) => red._id === curEmployeeId)
      : null
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (employee) {
      setEmployeeData(employee);
    }
  }, [employee]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (curEmployeeId) {
      dispatch(updateEmployee(curEmployeeId, employeeData));
    } else {
      dispatch(createEmployee(employeeData));
    }
    clearInputs();
  };

  const clearInputs = () => {
    setCurEmployeeId(null);
    setEmployeeData({
      name: "",
      born: "",
      gender: "",
      salary: "",
    });
  };
  return (
    <div className={style.Div}>
      {curEmployeeId ? <h3>Edit employee</h3> : <h3>Add employee</h3>}
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter your name"
          value={employeeData.name}
          onChange={(e) =>
            setEmployeeData({ ...employeeData, name: e.target.value })
          }
        />
        <input
          type="text"
          name="born"
          required
          placeholder="Enter your date of birth"
          value={employeeData.born}
          onChange={(e) =>
            setEmployeeData({ ...employeeData, born: e.target.value })
          }
        />
        <input
          type="text"
          name="gender"
          required
          placeholder="Enter your gender"
          value={employeeData.gender}
          onChange={(e) =>
            setEmployeeData({ ...employeeData, gender: e.target.value })
          }
        />
        <input
          type="text"
          name="salary"
          required
          placeholder="Enter your salary"
          value={employeeData.salary}
          onChange={(e) =>
            setEmployeeData({ ...employeeData, salary: e.target.value })
          }
        />
        <StyledButton type="submit">
          {curEmployeeId ? "Update" : "Add"}
        </StyledButton>
        {/* <button type="submit"> {curEmployeeId ? "Update" : "Add"}</button> */}
      </form>
    </div>
  );
};

export default Form;
