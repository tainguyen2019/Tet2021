import { useCallback, useState, useEffect } from "react";
import Card from "../card";
import { listIcon, frontIcon, iconNames } from "../../constants/icons";
import { shuffleArray, generateCardState, getRandomImage } from "./utils";
import "./game-card.scss";
import { listImage, imageKeys } from "../../constants/images";

const collection = iconNames.concat(iconNames);
const shuffledNames = shuffleArray(collection);
const defaultCardState = generateCardState(collection);
const imageKey = getRandomImage(imageKeys);
export default function GameCard() {
  const [openedKeys, setOpenedKeys] = useState([]);
  const [cardState, setCardState] = useState(defaultCardState);

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
        setTimeout(() => {
          setCardState((oldState) => ({
            ...oldState,
            [key1]: { ...oldState[key1], cleared: true },
            [key2]: { ...oldState[key2], cleared: true },
          }));
        }, 1000);
      }
      setOpenedKeys([]);
    }
  }, [openedKeys, setCardState]);
  console.log(imageKey);
  return (
    <div
      className="game-container"
      style={{
        background: `url(${listImage[imageKey]}) no-repeat`,
        backgroundSize: "100% 100%",
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
  );
}
