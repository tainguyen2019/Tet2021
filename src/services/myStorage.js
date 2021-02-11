// import myCrypto from "./myCrypto";
class MyStorage {
    getItem(key) {
        // const encryptKey = myCrypto.encrypt(key);
        // const encryptValue = localStorage.getItem(encryptKey);
        // return myCrypto.decrypt(encryptValue);
        return localStorage.getItem(key);
    }

    setItem(key, value) {
        // const encryptKey = myCrypto.encrypt(key);
        // const encryptValue = myCrypto.encrypt(value);
        // localStorage.setItem(encryptKey, encryptValue);
        localStorage.setItem(key, value);
    }
}

const myStorage = new MyStorage();
export default myStorage;