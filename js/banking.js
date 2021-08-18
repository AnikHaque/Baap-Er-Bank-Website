 document.getElementById('deposit-button').addEventListener('click', function(){

    //  work with deposit input field

        const depositInput = document.getElementById('deposit-input');
        const depositAmountText= depositInput.value;
        const depositAmount = parseFloat(depositAmountText);



    // work with deposit field

        const depositField = document.getElementById('deposit-total');
        const depositFieldText = depositField.innerText;
        const depositFieldTotal = parseFloat(depositFieldText);
        const depositTotal = depositFieldTotal + depositAmount;
        depositField.innerText = depositTotal;
        depositInput.value= '';


    // work with balance

    const balanceField = document.getElementById('balance-total');
    const balanceFieldPreviousText = balanceField.innerText;
    const balanceFieldPrevious = parseFloat(balanceFieldPreviousText);
    const balanceFieldTotal = balanceFieldPrevious + depositAmount;
    balanceField.innerText = balanceFieldTotal;


    })