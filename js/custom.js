// get all input field value
function getInputValue(inputId, fixed){
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputFieldTextNumber = parseFloat(inputFieldText);
    if (fixed != false){

    }
    else{
        inputField.value = '';
    }
    return inputFieldTextNumber
}
function putInnerTextValue(textId, amount){
    const textField = document.getElementById(textId);
    const textFieldText = textField.innerText;
    const textFieldTextNumber = parseFloat(textFieldText);
    const newTotalTextField =  amount + textFieldTextNumber ;

    textField.innerText = newTotalTextField;
    return newTotalTextField
}
function getInnerBalanceTextValue(textId, extraIncome, amount){
    const textField = document.getElementById(textId);
    const textFieldText = textField.innerText;
    const newBalance = extraIncome - amount;
    textField.innerText = newBalance; 
}
function updateBalance(balanceId){
    const balance = document.getElementById(balanceId);
    const balanceText = balance.innerText;
    const balanceTextNumber = parseFloat(balanceText);
    return balanceTextNumber
}
document.getElementById('calculation-button').addEventListener('click', function(){
    // total expences input sum
    const income = getInputValue('income-input', true);
    const foodExpences = getInputValue('food-input', false);
    const rentExpences = getInputValue('rent-input', false);
    const clothesExpences = getInputValue('clothes-input', false);

    if(isNaN(income)){
        alert('Please Give Me Money. Not number');
    }
    else if(isNaN(foodExpences)){
        alert('You took Food, Where is Money?');
    }
    else if(isNaN(rentExpences)){
        alert('You took Rent, Where is Money?');
    }
    else if(isNaN(clothesExpences)){
        alert('You took Clothes, Where is Money?');
    }
    else if(income >= 1 && foodExpences >= 0 && rentExpences >= 0 &&clothesExpences >= 0 ){
        const inputExpences = foodExpences + rentExpences + clothesExpences;
        // total input expenses get and put total expenses
        if(inputExpences < income){
            const putTotalExpenses = putInnerTextValue('expences-field', inputExpences);
            // balance put after expenses
            const putBalance = getInnerBalanceTextValue('balance-field', income, putTotalExpenses);
        }
        else{
            alert('You cant use money more than your Income');
        }

    }
    else{
        alert('No, NO, You Cant take money from here, give positive amount.');
    }
   
})
// saving part
document.getElementById('saving-button').addEventListener('click', function(){
    // income and get balance after expenses
    const income = getInputValue('income-input');
    const putBalance = updateBalance('balance-field');
    // saving input
    const savingInput = getInputValue('saving-input', false);
    // saving amount from parsent
    const savingInputToSavingAmount = (savingInput / 100) * income;

    if(isNaN(savingInput)){
        alert('You can only save your Money, not your Name.');
    }
    else if(savingInput >= 0){
        if(savingInputToSavingAmount <= putBalance){
            // put saving amount to saving amount field
            const savingAmount = putInnerTextValue('saving-field', savingInputToSavingAmount);
            if(savingAmount > 0){
                // get remaining balance and put balance 
                const remainingBalance = getInnerBalanceTextValue('remaining-field',putBalance, savingAmount);
            }
            else{
                alert('You have no enough money to save');
            }
            
        }
        else{
            alert('You cant Save More than Your Balance.');
        }
        
    }
    else{
        alert('Be positive and save positive money.');
    }
    
})