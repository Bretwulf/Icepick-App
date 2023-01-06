import { Header } from "../components/header/Header";
import Modal from "../components/modal/modal";
import EditForm from "../components/editForm/editForm";
import { useModal } from "../hooks/useModal";
import EditSentenceForm from "../components/editSentenceForm/EditSentenceForm";

export function ProfilePage() {
  const { stateModal, showModal } = useModal();
  

  return (
    <>
      <Header />
      {stateModal && <Modal />}
      <button onClick={() => showModal(<EditForm />)}>
        Abrir Modal de Editar
      </button>
      <button onClick={() => showModal(<EditSentenceForm/>)}>Editar Frase</button>
    </>
  );
}
