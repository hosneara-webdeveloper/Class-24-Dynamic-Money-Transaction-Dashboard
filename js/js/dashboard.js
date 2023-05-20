function getInput(inputId){
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    console.log(inputText);
    const inputAmount = parseFloat(inputText);

    // clear the input
    inputField.value = '';
    return inputAmount;
}
// update total dynamic 

function updateTotal (updateId, newInputAmount){
    const depositTotal = document.getElementById(updateId);
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    
    const amount =  previousDepositAmount + newInputAmount;
    depositTotal.innerText = amount;

}
// Current Balance
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    return balanceTotalAmount;

}
  getCurrentBalance()

// Balance Update
function updateBalance(amount, isAdd){
   const balanceTotal = document.getElementById('balance-total');
   const balanceTotalAmount = getCurrentBalance()

   /* const balanceTotalText = balanceTotal.innerText;
   const balanceTotalAmount = parseFloat(balanceTotalText); 
    balanceTotal.innerText = balanceTotalAmount + amount;*/
    if(isAdd == true){
        balanceTotal.innerText = balanceTotalAmount + amount;
    } else{
        balanceTotal.innerText = balanceTotalAmount - amount;

    }
}

// deposit button
document.getElementById('deposit-button').addEventListener('click', function(){
    const newDepositAmount = getInput('deposit-input');
    if (newDepositAmount > 0){
        updateTotal('deposit-total', newDepositAmount);
    updateBalance(newDepositAmount, true)   
    }
    if(newDepositAmount < 0){
        alert('Do not apply wrong input. Minus value is not allowed')

    }
    
})
// withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    const newWithdrawAmount = getInput('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updateTotal('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false)

    }
    if(newWithdrawAmount > currentBalance){
        alert('Do not apply wrong input')
    }
    
}) 


// submenu

$('sub-menu').on('click', function(){
    $('service1').slidetoggole();

})

