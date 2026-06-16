import React, { createContext } from 'react';

interface ModaleContextType {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    openAndUpdate: (element: React.ReactNode) => void;
    Content: React.ReactNode;
}

const ModalContext = createContext<null | ModaleContextType>(null);

export default ModalContext;
