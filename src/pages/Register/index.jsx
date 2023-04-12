import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Input } from "../../components/Input";
import { StyleRegister } from "./styled";
import { Zod } from "../../components/Zod";
import { api } from "../../services/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Zod),
  });
  const [date, setData] = useState([]);
  const navigate = useNavigate();

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

  return (
    <StyleRegister className="container_register">
      <header>
        <img src={logo} alt="logo" />
        <Link to={"/"}>Voltar</Link>
      </header>

      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="box_text">
          <h1>Crie sua conta</h1>
          <p>Rapido e grátis, vamos nessa</p>
        </div>
        <Input
          type={"name"}
          label={"Nome"}
          register={register("name")}
          placeholder={"Digite aqui seu nome"}
        />
        {errors.name ? (
          <p className="error_register">{errors.name.message}</p>
        ) : null}
        <Input
          type={"email"}
          label={"Email"}
          register={register("email")}
          placeholder={"Digite aqui seu email"}
        />
        {errors.email ? (
          <p className="error_register">{errors.email.message}</p>
        ) : null}
        <Input
          type={"password"}
          label={"Senha"}
          register={register("password")}
          placeholder={"Digite aqui sua senha"}
        />
        {errors.password ? (
          <p className="error_register">{errors.password.message}</p>
        ) : null}
        <Input
          type={"password"}
          label={"Confirmar senha"}
          register={register("confirm")}
          placeholder={"Digite novamente sua senha"}
        />
        {errors.confirm ? (
          <p className="error_register">{errors.confirm.message}</p>
        ) : null}
        <Input
          type={"text"}
          label={"Bio"}
          register={register("bio")}
          placeholder={"Fale sobre você"}
        />
        <Input
          type={"text"}
          label={"Contato"}
          register={register("contact")}
          placeholder={"Opção de contato"}
        />
        <label>Selecionar módulo</label>
        <select onChange={(event) => setData(event.target.value)}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo
          </option>
        </select>
        <button type="submit">Cadastrar</button>
      </form>
    </StyleRegister>
  );
};
export default RegisterPage;
