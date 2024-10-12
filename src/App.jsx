import { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm/LoginForm.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import LoginForms from "./components/LoginForms/LoginForms.jsx";

const App = () => {
  const [user, setUser] = useState([]);
  const handleLogin = (userData) => {
    setUser();
  };

  return (
    <>
      {/* <LoginForm onLogin={handleLogin} />
      <SearchBar /> */}
      <LoginForms />
    </>
  );
};

export default App;
