const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chn: [],
  getLength() {
    return this.chn.length;
  },
  addLink(value) {
    this.chn.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!this.chn[position - 1]) {
      this.chn = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chn.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chn.reverse();
    return this;
  },
  finishChain() {
    let result = this.chn.join("~~");
    this.chn = [];
    return result;
  },
};

module.exports = {
  chainMaker
};
