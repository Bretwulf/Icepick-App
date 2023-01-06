import React from "react"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../Assets/Imgs/icepick_logo.png"
import { useModal } from "../../contexts/modalContext/modalContext"
import { userContext } from "../../contexts/userContext"
import LoginPage from "../login/login"
import Modal from "../modal/modal"
import RegisterPage from "../register/Register"
import { StyledHeader } from "./StyledHeader"

const useOutsideClick = (callback: any) => {
    const ref = React.useRef()

    React.useEffect(() => {
        const handleClick = (e: any) => {
            callback();
        }

        document.addEventListener("click", handleClick)

        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [])

    return ref
}

export function Header () {
    const { stateModal, showModal } = useModal()
    const { user, token } = useContext(userContext)
    const navigate = useNavigate()

    function openDropDown (e: any) {
        const clicked = e.target
        if (e.target.className === "menu-line") {
            e.target.parentElement.nextSibling.classList.toggle("hidden")
        } else if (e.target.nodeName === "IMG") {
            e.target.nextSibling.classList.toggle("hidden")
        } else {
            e.target.lastChild.classList.toggle("hidden")
        }
    }

    const element = document.querySelector(".menu") as HTMLElement
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
                {
                    token !== "" ?
                    <button>Criar frase</button>
                    :
                    <></>
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
                                <p onClick={() => showModal(<RegisterPage/>)}>Sair</p>
                            </>                            
                            : user ?
                            <>
                                <Link to="/profile">Perfil</Link>
                                <p onClick={() => showModal(<RegisterPage/>)}>Sair</p>
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
        </StyledHeader>
    )
}