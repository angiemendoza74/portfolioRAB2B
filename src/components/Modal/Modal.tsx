import React from 'react';
import './Modal.scss';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal__overlay" onClick={onClose} />
      <div className="modal__content">
        <button
          className="modal__close"
          aria-label="Close modal"
          onClick={onClose}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
