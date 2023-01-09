import MainProfileStyled from "./mainProfileStyled";
import img from "../../Assets/Imgs/backgroundMobileAGORA.png";
import imgDesktop from "../../Assets/Imgs/backgroundDesktop.png";
import { Button } from "../buttons/button";
import pessoa from "../../Assets/Imgs/pessoa.jpeg";
import SearchInput from "../search/search";
import { userContext } from "../../contexts/userContext/userContext";
import { useContext } from "react";
import { modalContext } from "../../contexts/modalContext/modalContext";
import Modal from "../modal/modal";
import EditForm from "../editForm/editForm";
const MainProfile = () => {
  const { user } = useContext(userContext);
  const { showModal, closeModal, stateModal } = useContext(modalContext);
  return (
    <>
      {stateModal && <Modal />}
      <MainProfileStyled>
        {window.innerWidth < 500 ? (
          <img className="bg" src={img} alt="backgroundMobile" />
        ) : (
          <img className="bg" src={imgDesktop} alt="bgDesktop" />
        )}
        {window.innerWidth > 500 ? (
          <div className="warningDiv">
            <p className="pDivWarning">
              Cadastre-se para ter acesso a mais funcionalidades
            </p>
          </div>
        ) : null}
        <div className="containerProfileData">
          <img
            className="profilePicture"
            alt="profilePicture"
            src={user?.avatar}
          />
          <p className="profileParagraph">{user?.username}</p>
          <p className="profileParagraph" id="email">
            {user?.email}
          </p>
          <Button
            text="Atualizar Perfil"
            type="button"
            buttonSize="default"
            buttonStyle="bg-ColorBlue"
            onClick={() => showModal(<EditForm />)}
          />
        </div>
      </MainProfileStyled>
      <SearchInput />
    </>
  );
};
export default MainProfile;
