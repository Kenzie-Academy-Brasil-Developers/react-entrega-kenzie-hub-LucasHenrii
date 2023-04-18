import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { AddModal, EditModal } from "../../components/Modal";
import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";
import { StyledDash } from "./styled";

const Dashboard = () => {
  const {
    user,
    setUser,
    isAddModalOpen,
    setIsAddModalOpen,
    isEditModalOpen,
    setIsEditModalOpen,
    loading,
  } = useContext(UserContext);

  const { setEditTec, setDeleteTec } = useContext(TechContext);

  const navigate = useNavigate();

  const loggout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!user) {
    navigate("/");
  }

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
        <section className="container">
          <div className="div_container">
            <div className="div_header">
              <h2>Tecnologias</h2>
              <button onClick={() => setIsAddModalOpen(true)}>+</button>
            </div>
            {isAddModalOpen ? <AddModal /> : null}
          </div>
          <ul>
            {user.techs.length > 0 ? (
              user.techs.map((use) => (
                <li
                  onClick={() =>
                    setIsEditModalOpen(
                      true,
                      setEditTec(use),
                      setDeleteTec(use.id)
                    )
                  }
                  key={use.id}
                >
                  <h3>{use.title}</h3>
                  <p>{use.status}</p>
                </li>
              ))
            ) : (
              <p className="p_empty_list">Adicione uma tecnologia</p>
            )}
          </ul>
          {isEditModalOpen ? <EditModal /> : null}
        </section>
      </main>
    </StyledDash>
  );
};

export default Dashboard;
