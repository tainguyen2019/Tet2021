export const iconNames = [
    "balloons",
    "bell",
    "confetti",
    "lion-head",
    "party",
    "blower",
    "fan",
    "amulet",
];
export const listIcon = iconNames.reduce(
    (result, key) => ({...result, [key]: `/icons/card-${key}.svg` }), {}
);

export const frontIcon = "/icons/card-2021.svg";
export const iconTrophy = "/icons/icon-trophy.svg";