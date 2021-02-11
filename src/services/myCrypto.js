// import CryptoJS from "crypto-js";
class MyCrypto {
    encrypt(text) {
        // return AES.encrypt(text, "tainguyen").toString();
        return btoa(text);
    }

    decrypt(cipherText) {
        return atob(cipherText);
    }
}
const myCrypto = new MyCrypto();
export default myCrypto;