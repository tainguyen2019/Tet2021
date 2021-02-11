export const imageKeys = ["duc", "loc", "phuc", "nhan", "tai", "tam", "an"];
export const listImage = imageKeys.reduce(
    (result, key) => ({...result, [key]: `/images/${key}.jpg` }), {}
);

export const defaultImage = "/images/default-image.jpg";