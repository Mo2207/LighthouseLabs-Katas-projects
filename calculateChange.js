
const calculateChange = function(total, cash) {
  let result = {};
  let change = (cash - total) / 100;
  
  if (change > 20) {
    result.twentyDollar = Math.floor(change / 20); // 20 dollars
    change -= result.twentyDollar * 20;
  }
  if (change > 10) {
    result.tenDollar = Math.floor(change / 10); // 10 dollars 
    change -= result.tenDollar * 10;
  }
  if (change > 5) {
    result.fiveDollar = Math.floor(change / 5); // 5 dollars
    change -= result.fiveDollar * 5;
  }
  if (change > 2) {
    result.twoDollar = Math.floor(change / 2); // 2 dollars
    change -= result.twoDollar * 2;
  }
  if (change > 1) {
    result.oneDollar = Math.floor(change / 1); // 1 dollar
    change -= result.oneDollar * 1;
  }
  if (change > 0.25) {
    result.quarter = Math.floor(change / 0.25); // 1 quarter
    change -= result.quarter * 0.25;
  }
  if (change > 0.1) {
    result.dime = Math.floor(change / 0.1); // 1 dime
    change -= result.dime * 0.1;
  }
  if (change > 0.05) {
    result.nickel = Math.floor(change / 0.05); // 1 nickel
    change -= result.nickel * 0.05;
  }
  if (change > 0.01) {
    result.penny = Math.round(change / 0.01); // 1 penny
    change -= result.penny * 0.01;
  }
  return result;
};

console.log(calculateChange(1787, 2000)); 
// { twoDollar: 1, dime: 1, penny: 3 }

console.log(calculateChange(2623, 4000)); 
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }

console.log(calculateChange(501, 1000));
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }