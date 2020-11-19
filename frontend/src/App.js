import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllEmpolyees } from "./redux-store/actions/actions";
import Navbar from "./components/Navbar/Navbar";
import Form from "./containers/form/Form";
import Employees from "./components/Employees/Employees";

const App = () => {
  // const [showModal, setModal] = useState(false);
  // const [isUpdate, setUpdate] = useState(false);
  const [curEmployeeId, setCurEmployeeId] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEmpolyees());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Navbar />
      <Employees setCurEmployeeId={setCurEmployeeId} />
      <Form curEmployeeId={curEmployeeId} setCurEmployeeId={setCurEmployeeId} />
    </React.Fragment>
  );
};

export default App;
