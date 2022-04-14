function zeroFill(n){
  return n<9?`0${n}`:`${n}`;
}

function formatDate(date){
  const d = zeroFill(date.getDate());
  const mo = zeroFill(date.getMonth()+1);
  const y = zeroFill(date.getFullYear());
  const h = zeroFill(date.getHours());
  const mi = zeroFill(date.getMinutes());
  const s = zeroFill(date.getSeconds());
  return `${d}/${mo}/${y} ${h}:${mi}:${s}`;
}

function render(data){
  const date = document.querySelector('.date');
  date.innerHTML=data;
}
render('osi')
//iso8601
// 20/04/2019 10:00:00
console.log('+++');
const stringDate = '2019-04-20T10:00:00-03:00';
// let date = new Date(stringDate);
// render(formatDate(date));
// const dateNow = Date.now();
// console.log(dateNow);
// console.log('Date Ref.:',date);
// date.setSeconds(date.getSeconds()+70);
// console.log('+70 Seconds:',date);
// date = new Date(stringDate);
// date.setMinutes(date.getMinutes()+70);
// console.log('+70 Minutes:',date);
// date = new Date(stringDate);
// date.setHours(date.getHours()+25);
// console.log('+25 Hours:',date);
// date = new Date(stringDate);
// date.setDate(date.getDate()+15);
// console.log('+15 Date:',date);
// date = new Date(stringDate);
// date.setMonth(date.getMonth()+2);
// console.log('+2 Month:',date);
class MyDate extends Date{
  addSeconds(seconds){
    this.setSeconds(this.getSeconds()+seconds);
  }
  addMinutes(minutes){
    this.setMinutes(this.getMinutes()+minutes);
  }
  addHours(hours){
    this.setHours(this.getHours()+hours);
  }
  addDays(days){
    this.setDate(this.getDate()+days);
  }
  addMonth(months){
    this.setMonth(this.getMonth()+months);
  }
  addYears(years){
    this.setFullYear(this.getFullYear()+years);
  }
}
const myDate = new MyDate(stringDate);
myDate.addSeconds(2);
myDate.addMinutes(2);
myDate.addHours(2);
myDate.addDays(2);
myDate.addMonth(2);
myDate.addYears(2);
// console.log('+15 Date (myDate):',myDate);

const start = new Date(stringDate);
const stringEndDate = '2019-05-20T10:00:00-03:00';
const end = new Date(stringEndDate);
const result = end-start;
console.log(result);