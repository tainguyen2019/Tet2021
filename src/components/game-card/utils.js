export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export function generateCardState(collection) {
    return collection.reduce((result, item, index) => {
        const key = `${item}-${index}`;
        return {...result, [key]: { opened: false, cleared: false } };
    }, {});
}

export function getRandomImage(array) {
    return array[Math.floor(Math.random() * array.length)];
}