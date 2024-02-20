document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit');
    const depositAmount = parseFloat(depositField.value);

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalAmount = parseFloat(depositTotal.innerText);

    const balanceTotal = document.getElementById('Balance-total');
    const TotalBalanceAmount = parseFloat(balanceTotal.innerText);

    depositField.value = '';
    
    if(isNaN(depositAmount)){
        alert('Please enter your amount');
        return;
    }
    depositTotal.innerText = depositAmount + depositTotalAmount;
    balanceTotal.innerText = depositAmount + TotalBalanceAmount ;
})

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw');
    const withdrawAmount = parseFloat(withdrawField.value);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmount = parseFloat(withdrawTotal.innerText);

    const balanceTotal = document.getElementById('Balance-total');
    const TotalBalanceAmount = parseFloat(balanceTotal.innerText);
        
    withdrawField.value = '';

    if(isNaN(withdrawAmount)){
        alert('Please enter your amount');
        return;
    }

    if(TotalBalanceAmount < withdrawAmount){
        alert('You do not have enough money');
        return;
    }
    withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount;
    balanceTotal.innerText = TotalBalanceAmount - withdrawAmount ;
})