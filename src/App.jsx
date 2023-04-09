import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import LoginPage from "./components/pages/Login";
import RegisterPage from "./components/pages/Register";
import { GlobalStyled } from "./styles/globalStyled";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <GlobalStyled />
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer autoClose={1800} theme={"dark"} />
    </>
  );
}

export default App;
