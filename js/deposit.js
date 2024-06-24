document.getElementById('btn-deposit').addEventListener('click', function(){
   
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
     
     const depositTotalElement = document.getElementById('deposit-total');
     const previousDepositTotalString = depositTotalElement.innerText;
     const previousDepositTotal = parseFloat(previousDepositTotalString);

     const newDepositTotal = previousDepositTotal + newDepositAmount;
     depositTotalElement.innerText = newDepositTotal;

     const previousBalanceTotal = document.getElementById('balance-total');
     const newBalanceTotalString = previousBalanceTotal.innerText;
     const newBalanceTotal = parseFloat(newBalanceTotalString);

    const balanceTotal = newBalanceTotal + newDepositAmount;
    previousBalanceTotal.innerText = balanceTotal;

    depositField.value = '';
})