import styled from "styled-components";

const MainStyled = styled.main`
  width: 100%;
  z-index: -1;
  position: relative;
  img {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
    display: flex;
    flex-direction: column;
  }
  .warningDiv {
    height: 4.875rem;
    width: 25.375rem;
    border-radius: 1.5rem 0rem 0rem 1.5rem;
    background-color: var(--Grey-1);
    margin-top: 1rem;
    position: sticky;
    left: 90%;
    padding: 0.8rem 1rem 0.8rem 1rem;
    box-shadow: 1px 1px 1px 1px rgba(11, 0, 0, 0.5);
  }
  .pDivWarning {
    color: var(--Color-primary);
    font-size: 1.5rem;
  }
  .textBox {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 2rem;
    width: 94vw;
    height: 20vh;
    border: none;
    border-radius: 1.5rem;
    background-color: var(--Grey-1);
    box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(11, 0, 0, 0.5);
  }
  .pTextBox {
    color: var(--Color-primary);
    font-size: 1.6rem;
    height: 90%;
    width: 100%;
    overflow-y: scroll;
  }
  .buttonNewPhrase {
    width: 22.688rem;
    height: 3.438rem;
    border: none;
    background-color: var(--Color-Blue);
    color: #1e3c58;
    border-radius: 1.5rem;
    margin-top: 2.5rem;
    font-size: 1.25rem;
    font-weight: 600;
  }
  @media (min-width: 500px) {
    .textBox {
      width: 31.375rem;
      height: 13.5rem;
      border: none;
      border-radius: 1.5rem;
      background-color: var(--Grey-1);
    }
    .pTextBox {
      color: var(--Color-primary);
      font-size: 1.25rem;
    }
  }
`;
export default MainStyled;
