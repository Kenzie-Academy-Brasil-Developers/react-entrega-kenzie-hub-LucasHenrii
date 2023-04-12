import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { api } from "../../services";
import { StyledDash } from "./styled";

const Dashboard = ({ user, setUser }) => {
  const navigate = useNavigate();

  const loggout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    const loadUser = async () => {
      if (!user) {
        const id = JSON.parse(localStorage.getItem("@USERID"));

        const response = await api.get(`users/${id}`);

        setUser(response.data);
      }
    };
    loadUser();
  }, []);

  return (
    <StyledDash className="container_dashboard">
      <header>
        <nav>
          <img src={logo} alt="logo" />
          <button onClick={() => loggout()}>Sair</button>
        </nav>
        <div className="header">
          <div>
            {user ? <h2>Olá, {user.name}</h2> : null}
            {user ? <p>{user.course_module}</p> : null}
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
