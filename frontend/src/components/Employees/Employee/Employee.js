import React from "react";
import { useDispatch } from "react-redux";
import { removeEmployee } from "../../../redux-store/actions/actions";
import style from "./Employee.module.css";
import styled from "styled-components";
const Employee = ({ employee, setCurEmployeeId }) => {
  const dispatch = useDispatch();
  const StyledButtonEdit = styled.button`
    background-color: green;
  `;
  const StyledButtonDelete = styled.button`
    background-color: red;
  `;
  return (
    <div className={style.Employee}>
      <div>
        <p>Name:{employee.name}</p>
        <p>Born:{employee.born}</p>
        <p>Gender:{employee.gender}</p>
        <p>Salary:{employee.salary}</p>
      </div>
      <div>
        <StyledButtonEdit onClick={() => setCurEmployeeId(employee._id)}>
          EDIT
        </StyledButtonEdit>
        <StyledButtonDelete
          onClick={() => {
            dispatch(removeEmployee(employee._id));
          }}
        >
          DELETE
        </StyledButtonDelete>
      </div>
    </div>
  );
};

export default Employee;
