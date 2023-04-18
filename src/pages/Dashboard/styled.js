import styled from "styled-components";

export const StyledDash = styled.div`
  background-color: var(--color-grey-4);
  height: 100vh;

  header {
    background-color: var(--color-grey-4);
    color: var(--color-grey-0);
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    nav {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      border-bottom: 1px solid var(--color-grey-3);

      button {
        padding: 7px 15px;
        color: var(--color-grey-0);
        background-color: var(--color-grey-2);
        border: 1px solid transparent;
        border-radius: 4px;
        transition: 0.8s;
        cursor: pointer;
      }

      button:hover {
        background-color: var(--color-grey-1);
        transition: 0.8s;
      }
    }
  }

  .header {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-bottom: 1px solid var(--color-grey-3);

    h2 {
      font-size: 1.125rem;
      color: var(--color-grey-0);
    }

    p {
      font-size: 0.75rem;
      color: var(--color-grey-1);
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  .container {
    color: aliceblue;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-size: 1.125rem;
      color: var(--color-grey-0);
    }
  }

  .div_header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 32px;
      height: 32px;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      border: 1px solid transparent;

      background-color: var(--color-grey-3);
      color: var(--color-grey-0);
      cursor: pointer;
      transition: 0.8s;
    }

    button:hover {
      background-color: var(--color-grey-2);
      transition: 0.8s;
    }
  }

  ul {
    background-color: var(--color-grey-3);
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    list-style: none;
    gap: 1rem;
    overflow-y: auto;
    height: 470px;
    border-radius: 4px;
  }

  .p_empty_list {
    text-align: center;
    margin-top: 160px;
    font-size: 2rem;
    color: var(--color-grey-1);
  }

  li {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-4);
    padding: 1rem;
    border-radius: 4px;
    transition: 0.8s;
    cursor: pointer;
    font-size: 0.75rem;
  }

  li:hover {
    background-color: var(--color-grey-1);
    transition: 0.8s;
  }

  @media (min-width: 1025px) {
    header {
      nav {
        justify-content: space-around;
      }
    }

    .header {
      flex-direction: initial;
      justify-content: space-around;

      div {
        width: 58%;
        display: flex;
        flex-direction: initial;
        align-items: center;
        justify-content: space-between;
      }
    }

    .container {
      margin-top: 2rem;
      width: 61%;
      position: relative;
    }

    ul {
      background-color: var(--color-grey-3);
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      list-style: none;
      gap: 1rem;
      overflow-y: auto;
      height: 470px;
      border-radius: 4px;
    }

    .p_empty_list {
      text-align: center;
      margin-top: 200px;
      font-size: 2rem;
    }

    li {
      display: flex;
      position: relative;
      justify-content: space-between;
      align-items: center;
      background-color: var(--color-grey-4);
      padding: 1rem;
      border-radius: 4px;
      transition: 0.8s;
      cursor: pointer;
      font-size: 1rem;
    }

    li:hover {
      background-color: var(--color-grey-1);
      transition: 0.8s;
    }

    .div_container {
      position: relative;
    }

    main {
      display: flex;
      justify-content: center;
    }

    .div_header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        width: 32px;
        height: 32px;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        border: 1px solid transparent;

        background-color: var(--color-grey-3);
        color: var(--color-grey-0);
        cursor: pointer;
        transition: 0.8s;
      }

      button:hover {
        background-color: var(--color-grey-2);
        transition: 0.8s;
      }
    }

    .btn_close_modal_edit {
      position: absolute;
      background-color: transparent;
      width: 100%;
      height: 100%;
      left: 0;
      cursor: pointer;
      border: 1px solid transparent;
    }
  }
`;
