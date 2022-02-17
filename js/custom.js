// function getInputValue(inputValue){
//     const expenses = document.getElementById(inputValue);
//     const expensesText = expenses.value;
//     const expensesTextNumber = parseFloat(expensesText);
//     expenses.value = '';
//     return expensesTextNumber
// }    


document.getElementById('calculation-button').addEventListener('click', function(){
    // food input part
    // const foodExpences = getInputValue('food-input');
    // console.log(foodExpences);
    const foodExpenses = document.getElementById('food-input');
    const foodExpensesText = foodExpenses.value;
    const foodExpensesTextNumber = parseFloat(foodExpensesText);

    
    // rent input part
    // const rentExpences = getInputValue('rent-input');
    // console.log(rentExpences);
    const rentExpenses = document.getElementById('rent-input');
    const rentExpensesText = rentExpenses.value;
    const rentExpensesTextNumber = parseFloat(rentExpensesText);

    // clothes input part
    // const clothesExpences = getInputValue('clothes-input');
    // console.log(clothesExpences);
    const clothesExpenses = document.getElementById('clothes-input');
    const clothesExpensesText = clothesExpenses.value;
    const clothesExpensesTextNumber = parseFloat(clothesExpensesText);

    // total expences sum input
    const totalExpences = foodExpensesTextNumber + rentExpensesTextNumber + clothesExpensesTextNumber;

    // total expenses get input
    const expenses = document.getElementById('expences-input');
    const expensesText = expenses.innerText;
    const expensesTextNumber = parseFloat(expensesText);

    expenses.innerText = totalExpences;
})