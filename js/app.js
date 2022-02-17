document.getElementById("calculation").addEventListener("click", function () {
  const incomeText = document.getElementById("income-input").value;
  const foodText = document.getElementById("food-cost").value;
  const rentText = document.getElementById("rent-cost").value;
  const clothesText = document.getElementById("clothes-cost").value;
  const totalExpensesField = document.getElementById("total-expenses");
  const balanceField = document.getElementById("balance");

  const income = parseFloat(incomeText);
  const food = parseFloat(foodText);
  const rent = parseFloat(rentText);
  const clothes = parseFloat(clothesText);
  const totalExpenses = food + rent + clothes;
  const balance = income - totalExpenses;
  totalExpensesField.innerText = totalExpenses;
  balanceField.innerText = balance;

  console.log(totalExpenses);
  console.log(balance);
});

document
  .getElementById("savings-button")
  .addEventListener("click", function () {
    const savingsInputText = document.getElementById("savings-input").value;
    const savingsInput = parseFloat(savingsInputText);

    const balanceFieldText = document.getElementById("balance").innerText;
    const balanceField = parseFloat(balanceFieldText);

    const saving = (savingsInput / 100) * balanceField;

    const savingAmount = document.getElementById("saving-amount");
    const remainingBalance = balanceField - saving;
    const remainingBalanceField = document.getElementById("remaining-balance");
    savingAmount.innerText = saving;
    remainingBalanceField.innerText = remainingBalance;
  });
