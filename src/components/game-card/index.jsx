import { useCallback, useState, useEffect } from "react";
import Card from "../card";
import {
  listIcon,
  frontIcon,
  iconNames,
  iconTrophy,
} from "../../constants/icons";
import { shuffleArray, generateCardState, getRandomImage } from "./utils";
import "./game-card.scss";
import { listImage, imageKeys, defaultImage } from "../../constants/images";
import myStorage from "../../services/myStorage";

const collection = iconNames.concat(iconNames);
const shuffledNames = shuffleArray(collection);
const defaultCardState = generateCardState(collection);
const existImages = JSON.parse(myStorage.getItem("images")) || [];
const defaultKey = getRandomImage(imageKeys, existImages);
const lengthCard = 16;
const isDefaultImageValue = defaultKey ? false : true;
export default function GameCard() {
  const [openedKeys, setOpenedKeys] = useState([]);
  const [cardState, setCardState] = useState(defaultCardState);
  const [completed, setCompleted] = useState(false);
  const [imageKey, setImageKey] = useState(defaultKey);
  const [isDefaultImage, setIsDefaultImage] = useState(isDefaultImageValue);

  const handleClick = useCallback(
    (name, index, isOpened) => () => {
      const key = `${name}-${index}`;
      setCardState((oldState) => ({
        ...oldState,
        [key]: { ...oldState[key], opened: !isOpened },
      }));
      setOpenedKeys((oldState) => {
        if (!isOpened) {
          if (oldState[0]) {
            return [oldState[0], key];
          }
          return [key];
        } else {
          if (oldState[1]) {
            return [oldState[0]];
          }
          return [];
        }
      });
    },
    []
  );

  const handleReturn = () => {
    setCompleted(false);
  };

  const hanldeNewgame = () => {
    const currentExistImages = JSON.parse(myStorage.getItem("images")) || [];
    const newKey = getRandomImage(imageKeys, currentExistImages);
    setCompleted(false);
    if (!newKey) {
      setIsDefaultImage(true);
    }
    setImageKey(newKey);
    setCardState(defaultCardState);
  };

  useEffect(() => {
    if (openedKeys.length === 2) {
      const [key1, key2] = openedKeys;
      const [icon1, icon2] = openedKeys.map((key) => key.split("-")[0]);
      if (icon1 !== icon2) {
        setTimeout(() => {
          setCardState((oldState) => ({
            ...oldState,
            [key1]: { ...oldState[key1], opened: false },
            [key2]: { ...oldState[key2], opened: false },
          }));
        }, 1000);
      } else {
        const cardCleared = Object.values(cardState)
          .map((item) => item["cleared"])
          .reduce((acc, item) => (item ? acc + 1 : acc), 0);
        setTimeout(() => {
          setCardState((oldState) => ({
            ...oldState,
            [key1]: { ...oldState[key1], cleared: true },
            [key2]: { ...oldState[key2], cleared: true },
          }));
          if (cardCleared === lengthCard - 2) {
            const currentExistImages =
              JSON.parse(myStorage.getItem("images")) || [];
            setCompleted(true);
            myStorage.setItem(
              "images",
              JSON.stringify([...currentExistImages, imageKey])
            );
          }
        }, 1000);
      }
      setOpenedKeys([]);
    }
  }, [openedKeys, cardState, imageKey]);

  return (
    <div className="game-container">
      {!isDefaultImage && (
        <div
          className="game"
          style={{
            backgroundImage: `url(${listImage[imageKey]})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          {shuffledNames.map((name, index) => {
            const key = `${name}-${index}`;
            const { opened, cleared } = cardState[key];
            return (
              <Card
                key={`${name}-${index}`}
                backImage={listIcon[name]}
                frontImage={frontIcon}
                open={opened}
                clear={cleared}
                onClick={handleClick(name, index, opened)}
              />
            );
          })}
        </div>
      )}
      {completed && !isDefaultImage && (
        <div className="popup">
          <div className="title">BẠN CỪ ĐẤY!!!</div>
          <div className="content">
            <img src={iconTrophy} alt="" />
          </div>
          <div className="footer">
            <button onClick={handleReturn}>Quay lại</button>
            <button onClick={hanldeNewgame}>Màn mới</button>
          </div>
        </div>
      )}

      {isDefaultImage && (
        <div
          className="game"
          style={{
            backgroundImage: `url(${defaultImage})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      )}
    </div>
  );
}
