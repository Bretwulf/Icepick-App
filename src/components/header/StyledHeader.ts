import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--Color-Blue);
  box-shadow: var(--box-shadow);
  height: 8vh;
  .div-menu {
    display: flex;
    justify-content: space-between;
    gap: 25px;
    align-items: center;
    margin-right: 5%;
  }

  figure {
    margin-left: 5%;
    padding-top: 15px;
    img {
      object-fit: cover;
    }
  }

  .buttons-desktop {
    display: none;
    gap: 15px;
    margin-right: 5%;
  }

  .menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 3px;
    cursor: pointer;
    width: 25px;
    height: 25px;
    z-index: 2;

    img {
      border-radius: 255px;
      width: 35px;
      height: 35px;
    }

    .hamburger {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap: 3px;
    }
  }

  .menu-line {
    width: 25px;
    height: 3px;
    background-color: #fff5f5;
    z-index: 1;
  }

  .hidden-menu {
    width: 0;
    height: 0;
    position: relative;
  }

  .hidden {
    visibility: hidden;
  }

  .drop-down {
    display: flex;
    flex-direction: column;
    width: 150px;
    position: absolute;
    right: -25px;
    top: 10px;
    background-color: var(--Color-Blue-3);
    border-radius: var(--Border-Radius-1);
    color: var(--Grey-1);

    > p {
      border-bottom: 2px solid var(--Grey-1);
    }

    p {
      padding: 10px 0;
    }

    a {
      border-bottom: 2px solid var(--Grey-1);
      text-decoration: none;
      color: var(--Grey-1);
      padding: 10px 0;
      :hover {
        color: var(--Color-Blue);
      }
    }
  }

  @media (min-width: 500px) {
    .buttons-desktop {
      display: flex;
    }

    .menu-line {
      display: none;
    }
  }
`;
