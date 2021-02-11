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

export function getRandomImage(array, filterArr) {
    const processArray = array.filter((item) => !filterArr.includes(item));
    if (processArray.length === 0) return "";
    return processArray[Math.floor(Math.random() * processArray.length)];
}