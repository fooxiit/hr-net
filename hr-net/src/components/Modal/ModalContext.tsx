import React, { createContext } from 'react';

interface ModaleContextType {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    openAndUpdate: (element: React.ReactNode) => void;
    Content: React.ReactNode;
}

// Contexte partagé entre ModalProvider et ses enfants pour accéder à l'état et aux actions de la modal
const ModalContext = createContext<null | ModaleContextType>(null);

export default ModalContext;
