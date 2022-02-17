// get input value
function getInputValue(id) {
  const resultText = document.getElementById(id).value;
  const result = parseInt(resultText);
  return result;
}

// add event listener in calculation button
document.getElementById("calculation").addEventListener("click", function () {
  const totalExpensesField = document.getElementById("total-expenses");
  const balanceField = document.getElementById("balance");
  const income = getInputValue("income-input");
  const food = getInputValue("food-cost");
  const rent = getInputValue("rent-cost");
  const clothes = getInputValue("clothes-cost");
  const totalExpenses = food + rent + clothes;
  const balance = income - totalExpenses;
  totalExpensesField.innerText = totalExpenses;
  balanceField.innerText = balance;
});
// add event listener in savings button
document
  .getElementById("savings-button")
  .addEventListener("click", function () {
    const savingsInput = getInputValue("savings-input");

    const balanceFieldText = document.getElementById("balance").innerText;
    const balanceField = parseFloat(balanceFieldText);

    const saving = (savingsInput / 100) * balanceField;

    const savingAmount = document.getElementById("saving-amount");
    const remainingBalance = balanceField - saving;
    const remainingBalanceField = document.getElementById("remaining-balance");
    savingAmount.innerText = saving;
    remainingBalanceField.innerText = remainingBalance;
  });
