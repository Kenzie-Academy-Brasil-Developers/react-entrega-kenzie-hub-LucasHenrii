import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services";
import { UserContext } from "../UserContext";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const { user, setUser } = useContext(UserContext);
  const [date, setData] = useState([]);
  const [editTec, setEditTec] = useState(null);
  const [deleteTec, setDeleteTec] = useState(null);
  const { setIsAddModalOpen } = useContext(UserContext);

  const CreateTecnologia = async (data) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));

    try {
      const response = await api.post(
        "users/techs",
        { title: data.text, status: date },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsAddModalOpen(false);
      setUser({ ...user, techs: [...user.techs, response.data] });
      toast.success("Tecnologia cadastrada com sucesso!");
    } catch (error) {
      toast.error("Ops! Tecnologia já está na lista!");
    }
  };

  const EditTecnologia = async () => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));

    try {
      await api.put(
        `users/techs/${deleteTec}`,
        { status: date },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const id = JSON.parse(localStorage.getItem("@USERID"));
      const response = await api.get(`users/${id}`);
      setUser(response.data);
      toast.success("Tecnologia atualizada com sucesso!");
    } catch (error) {
      toast.error("Ops! Algo deu errado, tente novamente!");
    }
  };

  const DeleteTecnologia = async () => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));
    try {
      await api.delete(`users/techs/${deleteTec}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const id = JSON.parse(localStorage.getItem("@USERID"));
      const response = await api.get(`users/${id}`);
      setUser(response.data);
      toast.success("Tecnologia deletada com sucesso!");
    } catch (error) {
      toast.error("Ops! Algo deu errado, tente novamente!");
    }
  };

  return (
    <TechContext.Provider
      value={{
        setData,
        CreateTecnologia,
        DeleteTecnologia,
        EditTecnologia,
        setEditTec,
        editTec,
        setDeleteTec,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
