import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";
import { Input } from "../Input";
import { ZodModal } from "../Zod";
import { StyledAddmodal } from "./styled";

export const AddModal = () => {
  const { setIsAddModalOpen } = useContext(UserContext);
  const { setData, CreateTecnologia } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ZodModal),
  });

  return (
    <StyledAddmodal onSubmit={handleSubmit(CreateTecnologia)}>
      <div className="header_form">
        <h3>Cadastrar tecnologia</h3>
        <button onClick={() => setIsAddModalOpen(false)}>X</button>
      </div>
      <div className="main_form">
        <Input
          type={"text"}
          label={"Nome"}
          register={register("text")}
          placeholder={"Digite o nome da tecnologia"}
          className={"input_create"}
        />
        {errors.text ? <p>{errors.text.message}</p> : null}
        <label>Selecionar status</label>
        <select onChange={(event) => setData(event.target.value)}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button type="submit" className="btn_register">
          Cadastrar tecnologia
        </button>
      </div>
    </StyledAddmodal>
  );
};

export const EditModal = () => {
  const { user, setIsEditModalOpen } = useContext(UserContext);
  const { setData, DeleteTecnologia, EditTecnologia, editTec } =
    useContext(TechContext);

  const [inputDisabled, setInputDisabled] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ZodModal),
  });

  return (
    <StyledAddmodal onSubmit={handleSubmit()}>
      <div className="header_form">
        <h3>Tecnologia detalhes</h3>
        <button onClick={() => setIsEditModalOpen(false)}>X</button>
      </div>
      <div className="main_form">
        <Input
          type={"text"}
          label={"Nome"}
          value={editTec.title}
          register={register("text")}
          placeholder={"Digite o nome da tecnologia"}
          disabled={inputDisabled}
          className={"input_edit"}
        />

        <label>Selecionar status</label>
        <select
          value={editTec.status}
          onChange={(event) => setData(event.target.value)}
        >
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <div className="div_btn_modal_edit">
          <button
            onClick={() => {
              EditTecnologia(), setIsEditModalOpen(false);
            }}
            type="submit"
            className="btn_save"
          >
            Salvar alterações
          </button>
          <button
            onClick={() => {
              DeleteTecnologia(), setIsEditModalOpen(false);
            }}
            className="btn_delete"
          >
            Excluir
          </button>
        </div>
      </div>
    </StyledAddmodal>
  );
};
