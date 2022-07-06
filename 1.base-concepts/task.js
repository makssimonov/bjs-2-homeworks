"use strict"

function solveEquation(a, b, c) {
  let arr;
  let dis = ((b ** 2) - (4 * a * c));
  let root = [((-b) / (2 * a))];
  let roots = [((-b + Math.sqrt(dis) )/(2 * a)), ((-b - Math.sqrt(dis) )/(2 * a))];
  arr = dis;
  if (arr < 0) {
    return [];
  } else if (arr === 0) {
    return root;
  } else if (arr > 0) {
    return roots;
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  if (isNaN(percent)) {
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  }
  if (isNaN(contribution)) {
    return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  }
  if (isNaN(amount)) {
    return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  }
  let bodyCredit = amount - contribution;
  let S = bodyCredit;
  let lastMonth = date.getMonth();
  let lastYear = date.getFullYear();
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  if (currentMonth === 0) {
    currentMonth++;
    lastMonth++;
  }
  let countDate = lastMonth - currentMonth + (12 * (lastYear - currentYear));
  let n = countDate;
  let P = (percent / 100 / 12);
  let payment = S * (P + (P / (((1 + P) ** n) - 1)));
  let result = payment * n;
  totalAmount = +result.toFixed(2);
  return totalAmount;
}
