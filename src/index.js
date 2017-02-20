module.exports = function check(str, bracketsConfig) {
  let stack = new Stack;
  var br = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] !== bracketsConfig[i][1])
      br[bracketsConfig[i][1]] = bracketsConfig[i][0];
    else
      br[bracketsConfig[i][0]] = false;
  }

  for (let i = 0; i < str.length; i++) {
    if (br[str[i]] === false) {
      if (stack.top() == str[i]) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
      continue;
    }
    if (br[str[i]] === undefined) {
      stack.push(str[i]);
    } else {
      if (stack.top() == br[str[i]]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.isEmpty()) {
    return true;
  }
  return false;
}

class Stack {
  constructor() {
    this._stackArray = [];
    this._length = 0;
  }

  push(data) {
    if (data) {    
    this._stackArray[this._length] = data;
    this._length++; 
    }
  }

  top() {
    return this._stackArray[this._length - 1];        
  }

  isEmpty() {
    return (this._length == 0)
  }

  clear() {
    this._length = 0;
    this._stackArray = [];
  }

  pop() {
    let result = this._stackArray[this._length - 1];
    this._length--;
    return result;
  }
}


