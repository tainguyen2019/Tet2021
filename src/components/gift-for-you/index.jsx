import { useState } from "react";
import "./gift-for-you.scss";
import { listImage } from "../../constants/images";

export default function GiftForYou() {
  const [state, setState] = useState({
    image: listImage["an"],
  });

  const { image } = state;

  const handleChange = () => {
    const lengthOfImages = listImage.length;
    const indexOfImage = Math.floor(Math.random() * lengthOfImages);
    const image = listImage[indexOfImage];

    setState((oldState) => ({ ...oldState, image }));
  };

  return (
    <div className="gift-container">
      <h1>Quà Tết 2021</h1>
      <button onClick={handleChange}>Nhấn vô đây nè</button>
      <br />
      <img src={image} alt="Hình gì đây" />
    </div>
  );
}
