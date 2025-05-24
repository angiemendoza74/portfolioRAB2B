import { useRef } from 'react';
import { data } from '../../data/data';
import Card from '../Card/Card';
import './Portfolio.scss';

export default function Portfolio() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const focusCard = (index: number) => {
    const el = cardRefs.current[index];
    if (el) el.focus();
  };

  return (
    <div className="portfolio">
      <h1 className="portfolio__title">NASA Project Portfolio</h1>
      <p className="portfolio__description">
        These are projects and documents obtained from NASA for information purposes.
      </p>
      <div className="portfolio__grid">
        {data.map((item, index) => (
          <Card
            key={index}
            {...item}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                focusCard((index + 1) % data.length);
              } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                focusCard((index - 1 + data.length) % data.length);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
