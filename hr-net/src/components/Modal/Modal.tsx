import React, { useState, type PropsWithChildren } from 'react';
import './Modal.css';
import ModalContext from './ModalContext';
import useModalContext from '../../hook/useModalContext';

type ModalProps = PropsWithChildren & {
    initialContent?: React.ReactNode;
};

export default function ModalProvider({ children, initialContent = <></> }: ModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [Content, setContent] = useState<React.ReactNode>(initialContent);

    function open() {
        setIsOpen(true);
    }

    function openAndUpdate(Content: React.ReactNode) {
        setContent(Content);
        open();
    }

    function close() {
        setIsOpen(false);
    }

    return <ModalContext.Provider value={{ isOpen, Content, open, close, openAndUpdate }}>{children}</ModalContext.Provider>;
}

function Modal() {
    const { isOpen, close, Content } = useModalContext();
    if (isOpen)
        return (
            <div onClick={close} className="modal__container">
                <button className="modal__close-btn" onClick={close}>
                    X
                </button>
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    className="modal___content"
                >
                    {Content}
                </div>
            </div>
        );
}

ModalProvider.Modal = Modal;
