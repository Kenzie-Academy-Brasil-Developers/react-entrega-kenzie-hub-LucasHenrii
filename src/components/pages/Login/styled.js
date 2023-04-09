import styled from "styled-components";

export const Styledlogin = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--color-grey-4);

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 90%;
    padding: 1rem;
    gap: 1rem;

    background-color: var(--color-grey-3);
    color: var(--color-grey-0);
  }

  .box_btn {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    a {
      width: 100%;
      padding: 1rem;
      border-radius: 4px;
      text-align: center;
      text-decoration: none;

      background-color: var(--color-grey-2);
      color: var(--color-grey-0);
      transition: 0.8s;
    }

    a:hover {
      background-color: var(--color-grey-1);
      transition: 0.8s;
    }
  }
  p {
    color: var(--color-grey-1);
  }

  button {
    width: 100%;
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 4px;

    background-color: var(--color-primary-negative);
    color: var(--color-grey-0);
    cursor: pointer;
    transition: 0.8s;
  }

  button:hover {
    background-color: var(--color-primary);
    transition: 0.8s;
  }

  button:focus {
    background-color: var(--color-primary-focus);
    transition: 0.8s;
  }

  input {
    width: 100%;
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 4px;
    color: var(--color-grey-0);
    background-color: var(--color-grey-2);
  }

  label {
    width: 100%;
  }

  .error_login {
    color: var(--color-primary);
  }

  @media (min-width: 1025px) {
    form {
      width: 370px;
    }
  }
`;
