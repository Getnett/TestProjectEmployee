import {
  CREATE_EMPLOYEE,
  GET_ALL_EMPLOYEES,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  REQUEST_GET_ALL_EMPLOYEES,
} from "../../constants/actionTypes";

export default (employees = [], action) => {
  switch (action.type) {
    case CREATE_EMPLOYEE:
      return [...employees, action.payload];
    case GET_ALL_EMPLOYEES:
      return action.payload;
    case UPDATE_EMPLOYEE:
      return employees.map((emp) =>
        emp._id === action.payload._id ? action.payload : emp
      );
    case DELETE_EMPLOYEE:
      return employees.filter((emp) => emp._id !== action.payload);
    default:
      return employees;
  }
};
