import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import logo from "../../assets/logo.svg";
import { ZodLogin } from "../../components/Zod";
import { Styledlogin } from "./styled";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ZodLogin),
  });

  const { HandleLogin, user, loading } = useContext(UserContext);

  const navigate = useNavigate();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (user) {
    navigate("/dashboard");
  }

  return (
    <Styledlogin className="container_login">
      <header>
        <img src={logo} alt="logo" />
      </header>
      <form onSubmit={handleSubmit(HandleLogin)}>
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
