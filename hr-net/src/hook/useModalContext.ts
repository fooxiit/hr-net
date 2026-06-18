import { useContext } from 'react';
import ModalContext from '../components/Modal/ModalContext';

// Lève une erreur si le hook est utilisé en dehors d'un ModalProvider
export default function useModalContext() {
    const modalContext = useContext(ModalContext);
    if (!modalContext) throw new Error('useModalContext must be used within a ModalContextProvider');
    return modalContext;
}
