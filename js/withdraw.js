document.getElementById('btn-withdraw').addEventListener('click', function(){
     
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawBalanceTotal = parseFloat(newWithdrawAmountString);
    
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const newWithdrawTotalString = withdrawTotalElement.innerText;
    const newWithdrawTotal = parseFloat(newWithdrawTotalString);

    const withdrawTotal = newWithdrawTotal + newWithdrawBalanceTotal;
    withdrawTotalElement.innerText = withdrawTotal;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal - newWithdrawBalanceTotal;
    balanceTotal.innerText = newBalanceTotal;

    withdrawField.value = '';
}) 