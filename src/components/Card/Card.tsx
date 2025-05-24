import { forwardRef, useState } from 'react';
import type { KeyboardEventHandler } from 'react';
import Modal from '../Modal/Modal';
import './Card.scss';

type Data = {
  title: string;
  image: string;
  description: string;
  link: string;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
};

const Card = forwardRef<HTMLDivElement, Data>(
  ({ title, image, description, link, onKeyDown }, ref) => {
     const [isModalOpen, setIsModalOpen] = useState(false);
    return (
      <>
      <div
        className="card"
        ref={ref}
        tabIndex={0}
        role="group"
        aria-label={`Project card: ${title}`}
        onKeyDown={onKeyDown}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="card__container">
          <img
            src={image}
            alt={`Project image ${title}`}
            className="card__container-image"
          />
        </div>
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open project link ${title}`}
          className="card__link"
          onClick={(e) => e.stopPropagation()}
        >
          Ver más 
        </a>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>{title}</h2>
          <img src={image} alt={`Project image ${title}`} style={{ maxWidth: '100%' }} />          
      </Modal>
      </>
    );
  }
);

export default Card;
