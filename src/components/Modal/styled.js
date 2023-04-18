import styled from "styled-components";

export const StyledAddmodal = styled.form`
  width: 91%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px 1rem;
  gap: 1rem;
  position: absolute;
  top: 18%;
  left: 4%;
  z-index: 10;
  background-color: var(--color-grey-3);
  box-shadow: rgba(0, 0, 0, 0.71) 0px 0px 20px 5px;

  .header_form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    padding: 1rem;
    background-color: var(--color-grey-2);

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      color: var(--color-grey-1);
    }
  }

  .main_form {
    width: 100%;
    height: 100%;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 20px;
  }

  .div_btn_modal_edit {
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btn_save {
      width: 204px;
      height: 100%;
      background-color: var(--color-primary-negative);
      color: var(--color-grey-0);
      border: 1px solid transparent;
      font-size: 1rem;
      cursor: pointer;
      transition: 0.8s;
      border-radius: 4px;
    }
    .btn_save:hover {
      background-color: var(--color-primary-focus);
      transition: 0.8s;
    }

    .btn_delete {
      width: 98px;
      height: 100%;
      background-color: var(--color-grey-2);
      color: var(--color-grey-0);
      border: 1px solid transparent;
      font-size: 1rem;
      cursor: pointer;
      transition: 0.8s;
      border-radius: 4px;
    }
    .btn_delete:hover {
      background-color: var(--color-grey-1);
      transition: 0.8s;
    }
  }

  .btn_register {
    width: 100%;
    height: 48px;
    background-color: var(--color-primary-negative);
    color: var(--color-grey-0);
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.8s;
    border-radius: 4px;
  }
  .btn_register:hover {
    background-color: var(--color-primary-focus);
    transition: 0.8s;
  }

  .input_create {
    width: 100%;
    height: 48px;
    background-color: var(--color-grey-2);
    color: var(--color-grey-0);
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 1rem;
    font-size: 1rem;
  }

  .input_edit {
    width: 100%;
    height: 48px;
    background-color: var(--color-grey-2);
    color: var(--color-grey-1);
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 1rem;
    font-size: 1rem;
  }

  select {
    height: 48px;
    width: 100%;
    background-color: var(--color-grey-2);
    color: var(--colo-grey-0);
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 0 1rem;
    font-size: 1rem;
  }

  @media (min-width: 1025px) {
    width: 369px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 1rem;
    gap: 1rem;

    position: absolute;
    left: 28%;
    top: 0;
    z-index: 10;

    background-color: var(--color-grey-3);
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.71);

    .header_form {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      top: 0;
      padding: 1rem;
      background-color: var(--color-grey-2);

      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        color: var(--color-grey-1);
      }
    }

    .main_form {
      width: 100%;
      height: 100%;
      margin-top: 70px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 20px;
    }

    .div_btn_modal_edit {
      height: 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .btn_save {
        width: 204px;
        height: 100%;
        background-color: var(--color-primary-negative);
        color: var(--color-grey-0);
        border: 1px solid transparent;
        font-size: 1rem;
        cursor: pointer;
        transition: 0.8s;
        border-radius: 4px;
      }
      .btn_save:hover {
        background-color: var(--color-primary-focus);
        transition: 0.8s;
      }

      .btn_delete {
        width: 98px;
        height: 100%;
        background-color: var(--color-grey-2);
        color: var(--color-grey-0);
        border: 1px solid transparent;
        font-size: 1rem;
        cursor: pointer;
        transition: 0.8s;
        border-radius: 4px;
      }
      .btn_delete:hover {
        background-color: var(--color-grey-1);
        transition: 0.8s;
      }
    }

    .btn_register {
      width: 100%;
      height: 48px;
      background-color: var(--color-primary-negative);
      color: var(--color-grey-0);
      border: 1px solid transparent;
      cursor: pointer;
      transition: 0.8s;
      border-radius: 4px;
    }
    .btn_register:hover {
      background-color: var(--color-primary-focus);
      transition: 0.8s;
    }

    .input_create {
      width: 100%;
      height: 48px;
      background-color: var(--color-grey-2);
      color: var(--color-grey-0);
      border: 1px solid transparent;
      border-radius: 4px;
      padding: 1rem;
      font-size: 1rem;
    }

    .input_edit {
      width: 100%;
      height: 48px;
      background-color: var(--color-grey-2);
      color: var(--color-grey-1);
      border: 1px solid transparent;
      border-radius: 4px;
      padding: 1rem;
      font-size: 1rem;
    }

    select {
      height: 48px;
      width: 100%;
      background-color: var(--color-grey-2);
      color: var(--colo-grey-0);
      border: 1px solid transparent;
      border-radius: 4px;
      padding: 0 1rem;
      font-size: 1rem;
    }
  }
`;
