// import moment here; use this package in each function
const moment = require('moment');

const today = () => {
  return moment().format('dddd');
}

const calendar = () => {
  return moment().format('MMM DD, YYYY');
}

const currentTime = () => {

  return moment().format('hh:mm:ss A')

}

console.log(calendar());

module.exports = {
  today,
  calendar,
  currentTime
}