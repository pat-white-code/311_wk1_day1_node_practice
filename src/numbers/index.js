const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 === 0) {
    return true;
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  let sum = 0;
  for (let i = 0 ; i < arr.length ; i++) {
    sum += arr[i]
  }
  return sum;

}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for (let i = 0 ; i < arr.length ; i++) {
    sum -= arr[i]
  }
  if (sum === 0) {
    return true
  } else {
    return false
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}