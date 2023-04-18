import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import { GlobalStyled } from "./styles/globalStyled";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <GlobalStyled />
      <Routes>
        <Route index element={<LoginPage setUser={setUser} />} />
        <Route path="register" element={<RegisterPage />} />
        <Route
          path="dashboard"
          element={<Dashboard user={user} setUser={setUser} />}
        />
      </Routes>
      <ToastContainer autoClose={1800} theme={"dark"} />
    </>
  );
}

export default App;
