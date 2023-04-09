import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import logo from "../../../assets/logo.svg";
import { Api } from "../../../services";
import { ZodLogin } from "../../Zod";
import { Styledlogin } from "./styled";
import { toast } from "react-toastify";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ZodLogin),
  });

  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      await Api.post("sessions", data).then((reponse) => {
        localStorage.setItem("@token", JSON.stringify(reponse.data.token));
        localStorage.setItem("@userid", JSON.stringify(reponse.data.user.id));
        localStorage.setItem("@user", JSON.stringify(reponse.data.user));
      });
      const token = JSON.parse(localStorage.getItem("@token"));

      if (token) {
        navigate("dashboard");
      }
    } catch (error) {
      toast.error("Email ou senha inválido!");
    }
  };

  return (
    <Styledlogin className="container_login">
      <header>
        <img src={logo} alt="logo" />
      </header>
      <form onSubmit={handleSubmit(handleLogin)}>
        <h2>Login</h2>
        <Input
          type={"email"}
          label={"Email"}
          register={register("email")}
          placeholder="Digite seu email"
        />
        {errors.email ? (
          <p className="error_login">{errors.email.message}</p>
        ) : null}
        <Input
          type={"password"}
          label={"Senha"}
          register={register("password")}
          placeholder="Digite sua senha"
        />
        {errors.password ? (
          <p className="error_login">{errors.password.message}</p>
        ) : null}
        <button type="submit">Entrar</button>
        <div className="box_btn">
          <p>Ainda não possui uma conta?</p>
          <Link to="/register">Cadastre-se</Link>
        </div>
      </form>
    </Styledlogin>
  );
};

export default LoginPage;
