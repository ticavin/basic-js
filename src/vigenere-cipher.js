const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(modification) {
    if (modification === false) this.reverse = false;
  }

  reverse = true;

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    const messageUpper = message.toUpperCase(),
      keyUpper = key.toUpperCase();
    let result = '';
    for (let i = 0, j = 0; i <= messageUpper.length - 1; i++) {
      if (messageUpper[i].charCodeAt() < 65 || messageUpper[i].charCodeAt() > 90) {
        result += messageUpper[i];
        continue;
      }
      result += String.fromCharCode(((messageUpper[i].charCodeAt() + keyUpper[j].charCodeAt() - 130) % 26) + 65);
      j++;
      j % keyUpper.length === 0 ? (j = 0) : j;
    }
    return this.reverse === true ? result : result.split('').reverse().join('');
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    let result = '';
    const keyUpper = key.toUpperCase();
    for (let i = 0, j = 0; i <= message.length - 1; i++) {
      if (message[i].charCodeAt() < 65 || message[i].charCodeAt() > 90) {
        result += message[i];
        continue;
      }
      result += String.fromCharCode(((message[i].charCodeAt() - keyUpper[j].charCodeAt() + 26) % 26) + 65);
      j++;
      j % keyUpper.length === 0 ? (j = 0) : j;
    }
    return this.reverse === true ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
