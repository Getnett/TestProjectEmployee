import * as api from "../../api";
import {
  CREATE_EMPLOYEE,
  GET_ALL_EMPLOYEES,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "../../constants/actionTypes";

// action creator that uses redux-thunk
export const getAllEmpolyees = () => async (dispatch) => {
  try {
    const { data } = await api.getAllEmployees();
    console.log("Hi there", data);
    dispatch({ type: GET_ALL_EMPLOYEES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createEmployee = (employee) => async (dispatch) => {
  try {
    const { data } = await api.createEmployee(employee);
    dispatch({ type: CREATE_EMPLOYEE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updateEmployee = (id, employee) => async (dispatch) => {
  try {
    const { data } = await api.updateEmployee(id, employee);
    dispatch({ type: UPDATE_EMPLOYEE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
// export const removeEmployee = (id) => async (dispatch) => {
//   try {
//     await api.removeEmployee(id);
//     dispatch({ type: DELETE_EMPLOYEE, payload: id });
//   } catch (error) {
//     console.log(error);
//   }
// };
export const removeEmployee = (id) => async (dispatch) => {
  try {
    await api.removeEmployee(id);
    dispatch({ type: DELETE_EMPLOYEE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
