import styled from "styled-components";

export const StyleRegister = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--color-grey-4);

  header {
    width: 90%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 90%;
    padding: 1rem;
    gap: 1rem;
    border-radius: 4px;

    background-color: var(--color-grey-3);
    color: var(--color-grey-0);

    margin-bottom: 60px;
  }

  select {
    width: 100%;
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 4px;

    background-color: var(--color-grey-2);
    color: var(--color-grey-1);
  }

  input {
    width: 100%;
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 4px;

    background-color: var(--color-grey-2);
    color: var(--color-grey-0);
  }

  label {
    width: 100%;
    font-size: 0.75rem;
  }

  a {
    background-color: var(--color-grey-3);
    color: var(--color-grey-0);
    padding: 8px 20px;
    border-radius: 4px;
    transition: 0.8s;
  }

  a:hover {
    background-color: var(--color-grey-1);
    transition: 0.8s;
  }

  button {
    width: 100%;
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 4px;

    background-color: var(--color-primary-negative);
    color: var(--color-grey-0);
    transition: 0.8s;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--color-primary);
    transition: 0.8s;
  }

  button:focus {
    background-color: var(--color-primary-focus);
    transition: 0.8s;
  }

  h1 {
    font-size: 1rem;
    text-align: center;
  }

  p {
    font-size: 0.75rem;
    text-align: center;
    color: var(--color-grey-1);
  }

  .box_text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .error_register {
    color: var(--color-primary);
  }

  @media (min-width: 1025px) {
    form {
      width: 370px;
    }

    header {
      width: 370px;
    }
  }
`;
