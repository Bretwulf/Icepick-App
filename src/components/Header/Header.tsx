import React from "react"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../Assets/Imgs/icepick_logo.png"
import { useModal } from "../../contexts/modalContext/modalContext"
import { userContext } from "../../contexts/userContext"
import { Button } from "../buttons/button"
import LoginPage from "../login/login"
import Modal from "../modal/modal"
import RegisterPage from "../register/Register"
import { StyledHeader } from "./StyledHeader"

export function Header () {
    const { stateModal, showModal } = useModal()
    const { user, logout } = useContext(userContext)
    const navigate = useNavigate()

    function openDropDown (e: any) {
        if (e.target.className === "menu-line") {
            e.target.parentElement.nextSibling.classList.toggle("hidden")
        } else if (e.target.nodeName === "IMG") {
            e.target.nextSibling.classList.toggle("hidden")
        } else {
            e.target.lastChild.classList.toggle("hidden")
        }
    }

    const element = document.querySelector(".menu")
    document.addEventListener("click", (e: any) => {
        if (element?.contains(e.target)) {
        } else {
            element?.lastElementChild?.classList.add("hidden")
        }
    })

    return (
        <StyledHeader>
            {stateModal && <Modal/>}
            <figure>
                <img src={logo} alt="company logo" />
            </figure>
            <div className="div-menu">
                {
                    user ?
                    <>
                        <Button text="Criar Frase" buttonSize="small" buttonStyle="bg-ColorBlue3" type="button"/>
                    </>
                    :
                    <div className="buttons-desktop">
                        <Button onClick={() => showModal(<LoginPage/>)} text="Login" buttonSize="small" buttonStyle="bg-ColorBlue3" type="button"/>
                        <Button onClick={() => showModal(<RegisterPage/>)} className="register" text="Cadastrar" buttonSize="small" buttonStyle="bg-ColorBlue3" type="button"/>
                    </div>
                }
            <div className="menu" onClick={openDropDown}>
                {
                    user ?
                    <img src={user?.avatar} alt="user" />
                    :
                    <div className="hamburger">
                        <div className="menu-line"></div>
                        <div className="menu-line"></div>
                        <div className="menu-line"></div>
                    </div>
                }
                <div className="hidden-menu hidden">
                    <div className="drop-down">
                        {
                            user && window.location.pathname === "/profile" ?
                            <>
                                <p onClick={() => navigate(-1)}>Voltar</p>
                                <p onClick={logout}>Sair</p>
                            </>                            
                            : user ?
                            <>
                                <Link to="/profile">Perfil</Link>
                                <p onClick={logout}>Sair</p>
                            </>
                            :
                            <>
                                <p onClick={() => showModal(<LoginPage/>)}>Login</p>
                                <p onClick={() => showModal(<RegisterPage/>)}>Cadastrar</p>
                            </>
                        }
                    </div>
                </div>
            </div>
            </div>
        </StyledHeader>
    )
}