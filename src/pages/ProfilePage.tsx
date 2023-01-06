
import { Header } from "../components/Header/Header";
import Modal from "../components/modal/modal";
import EditForm from '../components/editForm/editForm';
import { useModal } from '../hooks/useModal';
export function ProfilePage () {
    const { stateModal, showModal} = useModal()

    return (
        <>
            <Header/>
            {stateModal && <Modal/>}
            <button onClick={() => showModal(<EditForm/>)}>Abrir Modal de Editar</button>
        </>
    )
}