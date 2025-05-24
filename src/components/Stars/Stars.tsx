import './Stars.scss';

export default function Stars() {
  const totalStars = 120; 
  const shootingProbability = 0.12; 

  return (
    <div className="stars-bg">
      {Array.from({ length: totalStars }).map((_, i) => {
        const isShooting = Math.random() < shootingProbability;

       
        const shootTranslateX = 150 + Math.random() * 250; 
        const shootTranslateY = 50 + Math.random() * 150;  
        const duration = 1 + Math.random() * 2;             

        return (
          <div
            key={i}
            className={`stars-bg__star${isShooting ? ' stars-bg__star--shooting' : ''}`}
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              width: isShooting ? '2.5px' : `${Math.random() * 2 + 1}px`,
              height: isShooting ? '2.5px' : `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: isShooting
                ? `${duration}s`
                : `${Math.random() * 10 + 5}s`,
              ...(isShooting
                ? {
                    '--shoot-translate-x': `${shootTranslateX}px`,
                    '--shoot-translate-y': `${shootTranslateY}px`,
                  }
                : {}),
            }}
          />
        );
      })}
    </div>
  );
}
