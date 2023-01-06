import { Header } from "../components/header/Header";
import Modal from "../components/modal/modal";
import EditForm from "../components/editForm/editForm";
import { useModal } from "../hooks/useModal";
import Main from "../components/main";
import FilterSection from "../components/filter/filter";
import { userContext } from "../contexts/userContext/userContext";
import { useContext } from "react";
export function ProfilePage() {
  const { stateModal, showModal } = useModal();
  /* filterRelatedSentences(user?.id, ) */
  return (
    <>
      <Header />
      {stateModal && <Modal />}
      <button onClick={() => showModal(<EditForm />)}>
        Abrir Modal de Editar
      </button>
      <FilterSection page="profile"/>
    </>
  );
}
