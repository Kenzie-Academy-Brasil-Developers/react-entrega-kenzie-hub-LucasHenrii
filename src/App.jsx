import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import { GlobalStyled } from "./styles/globalStyled";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

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
