import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import * as api from "../../api";
import {
  CREATE_EMPLOYEE,
  GET_ALL_EMPLOYEES,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  REQUEST_GET_ALL_EMPLOYEES,
} from "../../constants/actionTypes";

//  sagas
function* getAllEmpolyees() {
  try {
    const { data } = yield call(api.getAllEmployees);
    console.log("Hi there", data);
    yield put({ type: GET_ALL_EMPLOYEES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

function* getAllEmpolyeesSaga() {
  yield takeLatest(GET_ALL_EMPLOYEES, getAllEmpolyees);
}

export default getAllEmpolyeesSaga;
