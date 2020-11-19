import axios from "axios";

const API_BASE_URL = "https://employe-manager.herokuapp.com/employees";

export const getAllEmployees = () => axios.get(API_BASE_URL);
export const createEmployee = (employee) => axios.post(API_BASE_URL, employee);
export const updateEmployee = (id, updatedEmployee) =>
  axios.patch(`${API_BASE_URL}/${id}`, updatedEmployee);
export const removeEmployee = (id) => axios.delete(`${API_BASE_URL}/${id}`);
