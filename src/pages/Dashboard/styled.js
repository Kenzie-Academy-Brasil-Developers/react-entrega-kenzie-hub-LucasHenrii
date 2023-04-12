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
    }

    main {
      display: flex;
      justify-content: center;
    }
  }
`;
