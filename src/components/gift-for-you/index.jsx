import "./gift-for-you.scss";
import { listImage } from "../../constants/images";
import myStorage from "../../services/myStorage";

export default function GiftForYou() {
  const existImages = JSON.parse(myStorage.getItem("images")) || [];
  return (
    <div className="gift-container">
      {existImages.map((key) => (
        <img src={listImage[key]} alt={key} key={key} />
      ))}
      {!existImages.length && (
        <div className="no-collection">
          Không có gì...Chơi lật hình để sưu tầm nào!!!
        </div>
      )}
    </div>
  );
}
