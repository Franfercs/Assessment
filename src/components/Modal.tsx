import React from 'react';
import { Transition, TransitionChild } from '@headlessui/react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
    return (
        <Transition show={isOpen} as={React.Fragment}>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" onClick={onClose}>
                <TransitionChild
                    as={React.Fragment}
                    enter="transform transition duration-300 ease-in-out"
                    enterFrom="scale-75 opacity-0"
                    enterTo="scale-100 opacity-100"
                    leave="transform transition duration-300 ease-in-out"
                    leaveFrom="scale-100 opacity-100"
                    leaveTo="scale-75 opacity-0"
                >
                    <div className="max-w-sm w-full p-6" onClick={(e) => e.stopPropagation()}>
                        {content}
                    </div>
                </TransitionChild>
            </div>
        </Transition>
    );
};

export default Modal;
