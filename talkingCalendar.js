
const talkingCalendar = function(date) {
  date = date.split('/');
  return `${getMonth(date[1])} ${getDay(date[2])}, ${date[0]}`;
};

const getMonth = function(num) {
  let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return month[num-1];
}

const getDay = function(num) {
  if (num.length > 1) num = num.substring(1);
  if (num == 1) return `${num}st`
  if (num == 2) return `${num}nd`
  if (num == 3) return `${num}rd`
  return `${num}th`
}

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987