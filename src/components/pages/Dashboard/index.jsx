import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { StyledDash } from "./styled";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("@user"));
  const navigate = useNavigate();

  const loggout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <StyledDash className="container_dashboard">
      <header>
        <nav>
          <img src={logo} alt="logo" />
          <button onClick={() => loggout()}>Sair</button>
        </nav>
        <div className="header">
          <div>
            <h2>Olá, {user.name}</h2>
            <p>{user.course_module}</p>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <h1>Que pena! Estamos em desenvolvimento :(</h1>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </main>
    </StyledDash>
  );
};

export default Dashboard;
