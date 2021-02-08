import "./card.scss";
import { useMemo } from "react";

export default function Card({ frontImage, backImage, open, clear, onClick }) {
  const classFlipCard = useMemo(() => `card-inner ${open ? "flipped" : ""}`, [
    open,
  ]);

  const classShowCard = useMemo(
    () => `card-container ${clear ? "hidden-card" : ""}`,
    [clear]
  );

  return (
    <div className={classShowCard}>
      <div className={classFlipCard} onClick={onClick}>
        <div className="card-front">
          <img src={frontImage} alt="frontImage" />
        </div>
        <div className="card-back">
          <img src={backImage} alt="backImage" />
        </div>
      </div>
    </div>
  );
}
