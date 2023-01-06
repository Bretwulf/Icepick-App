import EditPage from "../components/edit/edit";
import { Header } from "../components/Header/Header";
import Modal from "../components/modal/modal";
import { useModal } from "../contexts/modalContext/modalContext";

export function ProfilePage () {
    const { stateModal, showModal} = useModal()

    return (
        <>
            <Header/>
            {stateModal && <Modal/>}
            <button onClick={() => showModal(<EditPage/>)}>Abrir Modal de Editar</button>
        </>
    )
}