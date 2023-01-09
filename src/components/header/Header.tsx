import React, { SyntheticEvent, useEffect } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/Imgs/icepick_logo.png";
import { userContext } from "../../contexts/userContext/userContext";
import { Button } from "../buttons/button";
import Modal from "../modal/modal";
import { StyledHeader } from "./StyledHeader";
import LoginForm from "../loginForm/loginForm";
import RegisterForm from "../registerForm/registerForm";
import { useModal } from "../../hooks/useModal";
import AddSentenceForm from "../AddSentenceForm/AddSentenceForm";

export function Header() {
  const { stateModal, showModal } = useModal();
  const { user, logout } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    const element = document.querySelector(".menu");
    document.addEventListener("click", (e: MouseEvent) => {
      if (!element?.contains(e.target as Element)) {
        element?.lastElementChild?.classList.add("hidden");
      }
    });
  }, []);

  function openDropDown(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (e.currentTarget instanceof HTMLElement)
      if (e.currentTarget.className === "menu-line") {
        e.currentTarget.parentElement!.nextElementSibling!.classList.toggle(
          "hidden"
        );
      } else if (e.currentTarget!.nodeName === "IMG") {
        e.currentTarget!.nextElementSibling!.classList.toggle("hidden");
      } else {
        e.currentTarget!.lastElementChild!.classList.toggle("hidden");
      }
  }

  return (
    <StyledHeader>
      {stateModal && <Modal />}
      <figure>
        <img src={logo} alt="company logo" />
      </figure>
      <div className="div-menu">
        {user ? (
          <>
            <Button
              onClick={() => showModal(<AddSentenceForm />)}
              text="Criar Frase"
              buttonSize="small"
              buttonStyle="bg-ColorBlue3"
              type="button"
            />
          </>
        ) : (
          <div className="buttons-desktop">
            <Button
              onClick={() => showModal(<LoginForm />)}
              text="Login"
              buttonSize="small"
              buttonStyle="bg-ColorBlue3"
              type="button"
            />
            <Button
              onClick={() => showModal(<RegisterForm />)}
              className="register"
              text="Cadastrar"
              buttonSize="small"
              buttonStyle="bg-ColorBlue3"
              type="button"
            />
          </div>
        )}
        <div className="menu" onClick={openDropDown}>
          {user ? (
            <img src={user?.avatar} alt="user" />
          ) : (
            <div className="hamburger">
              <div className="menu-line"></div>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
            </div>
          )}
          <div className="hidden-menu hidden">
            <div className="drop-down">
              {user && window.location.pathname === "/profile" ? (
                <>
                  <p onClick={() => navigate(-1)}>Voltar</p>
                  <p onClick={logout}>Sair</p>
                </>
              ) : user ? (
                <>
                  <Link to="/profile">Perfil</Link>
                  <p onClick={logout}>Sair</p>
                </>
              ) : (
                <>
                  <p onClick={() => showModal(<LoginForm />)}>Login</p>
                  <p onClick={() => showModal(<RegisterForm />)}>Cadastrar</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
}
