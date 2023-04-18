import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [date, setData] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const navigate = useNavigate();

  const HandleLogin = async (data) => {
    try {
      const response = await api.post("sessions", data);
      const { user: userRes } = response.data;
      setUser(userRes);

      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
    } catch (error) {
      toast.error("Email ou senha inválido!");
    }

    const token = JSON.parse(localStorage.getItem("@TOKEN"));

    if (token) {
      navigate("dashboard");
    }
  };

  const handleRegister = async (data) => {
    try {
      await api.post("users", { ...data, course_module: date });
      toast.success("Conta criada com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("@TOKEN"));
        const id = JSON.parse(localStorage.getItem("@USERID"));

        if (token) {
          const response = await api.get(`users/${id}`);
          setUser(response.data);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        HandleLogin,
        setData,
        handleRegister,
        isAddModalOpen,
        setIsAddModalOpen,
        isEditModalOpen,
        setIsEditModalOpen,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
