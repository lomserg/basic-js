const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    let result = "";
    let keyIndex = 0;

    for (const char of message) {
      if (/[a-z]/i.test(char)) {
        const shift =
          key[keyIndex % key.length].toLowerCase().charCodeAt(0) - 97;
        const code = char.toUpperCase().charCodeAt(0) - 65;

        result += String.fromCharCode(((code + shift) % 26) + 65);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    let result = "";
    let keyIndex = 0;

    for (const char of message) {
      if (/[a-z]/i.test(char)) {
        const shift =
          key[keyIndex % key.length].toLowerCase().charCodeAt(0) - 97;
        const code = char.toUpperCase().charCodeAt(0) - 65;

        result += String.fromCharCode(((code - shift + 26) % 26) + 65);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
