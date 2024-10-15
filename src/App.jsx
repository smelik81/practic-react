import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/getTasksOps.js";
import { Users } from "./components/Users/Users.jsx";
import LoginForm from "./components/LoginForm/LoginForm.jsx";

const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <h1>Redux AsyncThunk Page</h1>
      {/* <Users items={items} /> */}
      <LoginForm />
    </>
  );
};

export default App;
