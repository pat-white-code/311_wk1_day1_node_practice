const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim)
}

const pairs = (str) => {
  //for each letter, if j === 0, start a new word.
  //if j === 1, concat this to last item in pairs array
  let pairsArr = [];
  for (let i = 0 ; i < str.length ; i += 2) {
    let pair = str[i].concat(str[i+1]);
    pairsArr.push(pair)
  }
  return pairsArr;
  // write code for strings.pairs
  // let arr = str.split('')
  // let pairs = [];
  // for ()
  // while (i < 2) {
  //   arr.push()
  // }
}

const reverse = (str) => {
  // write code for strings.reverse
  let arr = str.split('');
  arr.reverse();
  let reversed = arr.join('');
  return reversed;
}

module.exports = {
  split,
  pairs,
  reverse
}