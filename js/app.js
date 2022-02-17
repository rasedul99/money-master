// get input value
function getInputValue(id) {
  const resultText = document.getElementById(id).value;
  const result = parseInt(resultText);
  if (isNaN(result)) {
    getNotNumber();
    return 0;
  } else if (result < 0) {
    negative();
    return 0;
  } else {
    return result;
  }
}
// get total expense
function getTotalExpense() {
  const income = getInputValue("income-input");
  const food = getInputValue("food-cost");
  const rent = getInputValue("rent-cost");
  const clothes = getInputValue("clothes-cost");
  const totalExpenses = food + rent + clothes;
  if (totalExpenses > income) {
    expenseMOreThanIncome();
  }
  return totalExpenses;
}

function getBalance() {
  const totalExpensesField = document.getElementById("total-expenses");
  const balanceField = document.getElementById("balance");
  const totalExpenses = getTotalExpense();
  const income = getInputValue("income-input");
  const balance = income - totalExpenses;
  totalExpensesField.innerText = totalExpenses;
  balanceField.innerText = balance;
  return balance;
}
// add event listener in calculation button
document.getElementById("calculation").addEventListener("click", function () {
  const totalBalance = getBalance();
});
// add event listener in savings button
document
  .getElementById("savings-button")
  .addEventListener("click", function () {
    const savingAmount = getInputValue("savings-input");
    const income = getInputValue("income-input");
    const saving = (savingAmount / 100) * income;
    const totalBalance = getBalance();

    const totalExpenses = getTotalExpense();

    const remainingBalance = income - (saving + totalExpenses);
    const savingAmountFiled = document.getElementById("saving-amount");
    const remainingBalanceField = document.getElementById("remaining-balance");

    savingAmountFiled.innerText = saving;
    remainingBalanceField.innerText = remainingBalance;
    if (saving > totalBalance) {
      savingMoreThanBalance();
    }
  });

//   for negativeValue error
function negative() {
  const negativeValue = document.getElementById("negative-value");

  negativeValue.style.display = "block";
}
// for not number err
function getNotNumber() {
  const notNumber = document.getElementById("not-number");

  notNumber.style.display = "block";
}
// when saving more than balance error
function savingMoreThanBalance() {
  const hugeSavings = document.getElementById("saving-more-than-balance");
  hugeSavings.style.display = "block";
}
// when expense  more than income error
function expenseMOreThanIncome() {
  const hugeExpense = document.getElementById("expense-more-than-income");
  hugeExpense.style.display = "block";
}
