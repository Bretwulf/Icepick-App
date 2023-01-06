import { Header } from "../components/header/Header";
import Modal from "../components/modal/modal";
import EditForm from "../components/editForm/editForm";
import { useModal } from "../hooks/useModal";
import Main from "../components/main";
import FilterSection from "../components/filter/filter";
export function ProfilePage() {
  const { stateModal, showModal } = useModal();

  return (
    <>
      <Header />
      {stateModal && <Modal />}
      <button onClick={() => showModal(<EditForm />)}>
        Abrir Modal de Editar
      </button>
      <FilterSection/>
    </>
  );
}
