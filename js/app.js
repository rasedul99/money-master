// get input value
function getInputValue(id) {
  const resultText = document.getElementById(id).value;
  const result = parseInt(resultText);
  return result;
}

function getTotalExpense() {
  const income = getInputValue("income-input");
  const food = getInputValue("food-cost");
  const rent = getInputValue("rent-cost");
  const clothes = getInputValue("clothes-cost");
  const totalExpenses = food + rent + clothes;
  return totalExpenses;
}

// add event listener in calculation button
document.getElementById("calculation").addEventListener("click", function () {
  const totalExpensesField = document.getElementById("total-expenses");
  const balanceField = document.getElementById("balance");
  const totalExpenses = getTotalExpense();
  const income = getInputValue("income-input");
  const balance = income - totalExpenses;
  totalExpensesField.innerText = totalExpenses;
  balanceField.innerText = balance;
});
// add event listener in savings button
document
  .getElementById("savings-button")
  .addEventListener("click", function () {
    const savingAmount = getInputValue("savings-input");
    const income = getInputValue("income-input");
    const saving = (savingAmount / 100) * income;
    const totalExpenses = getTotalExpense();
    const remainingBalance = income - (saving + totalExpenses);
    const savingAmountFiled = document.getElementById("saving-amount");
    const remainingBalanceField = document.getElementById("remaining-balance");

    savingAmountFiled.innerText = saving;
    remainingBalanceField.innerText = remainingBalance;
  });
