const previousCost = document.getElementById('product-cost').innerText;
const previousCaseCost = document.getElementById('case-cost').innerText;

function taxCalculation(subTotal){
    if(subTotal < 1000){
        const tax = parseInt(subTotal * 0.05);
        return tax;
    }else{
        const tax = parseInt(subTotal * 0.15);
        return tax;
    }
}

document.getElementById('btn-product-pluse').addEventListener('click', function(){
    const productFeild = document.getElementById('product-input');
    const previousNumber = parseInt(productFeild.value);
    const newNumber = previousNumber + 1;
    productFeild.value = newNumber;
    const productCost = document.getElementById('product-cost');
    const newCost = newNumber * previousCost;
    productCost.innerText = newCost;

    const casePrice = parseInt(document.getElementById('case-cost').innerText);
    const subTotalPrice = newCost + casePrice;
    const SubTotal = document.getElementById('sub-total');
    SubTotal.innerText = subTotalPrice;

    const taxAmount = taxCalculation(subTotalPrice);
    const tax = document.getElementById('tax-amount');
    tax.innerText = taxAmount;

    const grandTotal = subTotalPrice + taxAmount;
    const total = document.getElementById('grand-total');
    total.innerText = grandTotal;

});

document.getElementById('btn-product-minuse').addEventListener('click', function(){
    const productFeild = document.getElementById('product-input');
    const previousNumber = parseInt(productFeild.value);
    if(previousNumber > 1){
        const newNumber = previousNumber - 1;
        productFeild.value = newNumber;
        const productCost = document.getElementById('product-cost');
        const newCost = newNumber * previousCost;
        productCost.innerText = newCost;

        const casePrice = parseInt(document.getElementById('case-cost').innerText);
        const subTotalPrice = newCost + casePrice;
        const SubTotal = document.getElementById('sub-total');
        SubTotal.innerText = subTotalPrice;

        const taxAmount = taxCalculation(subTotalPrice);
        const tax = document.getElementById('tax-amount');
        tax.innerText = taxAmount;

        const grandTotal = subTotalPrice + taxAmount;
        const total = document.getElementById('grand-total');
        total.innerText = grandTotal;
    }

});

document.getElementById('btn-case-pluse').addEventListener('click', function(){
    const caseFeild = document.getElementById('case-input');
    const previousNumber = parseInt(caseFeild.value);
    const newNumber = previousNumber + 1;
    caseFeild.value = newNumber;
    const caseCost = document.getElementById('case-cost');
    const newCost = newNumber * previousCaseCost;
    caseCost.innerText = newCost;

    const productPrice = parseInt(document.getElementById('product-cost').innerText);
    const subTotalPrice = newCost + productPrice;
    const SubTotal = document.getElementById('sub-total');
    SubTotal.innerText = subTotalPrice;

    const taxAmount = taxCalculation(subTotalPrice);
    const tax = document.getElementById('tax-amount');
    tax.innerText = taxAmount;

    const grandTotal = subTotalPrice + taxAmount;
    const total = document.getElementById('grand-total');
    total.innerText = grandTotal;
});

document.getElementById('btn-case-minuse').addEventListener('click', function(){
    const caseFeild = document.getElementById('case-input');
    const previousNumber = parseInt(caseFeild.value);
    if(previousNumber > 1){
        const newNumber = previousNumber - 1;
        caseFeild.value = newNumber;
        const caseCost = document.getElementById('case-cost');
        const newCost = newNumber * previousCaseCost;
        caseCost.innerText = newCost;

        const productPrice = parseInt(document.getElementById('product-cost').innerText);
        const subTotalPrice = newCost + productPrice;
        const SubTotal = document.getElementById('sub-total');
        SubTotal.innerText = subTotalPrice;

        const taxAmount = taxCalculation(subTotalPrice);
        const tax = document.getElementById('tax-amount');
        tax.innerText = taxAmount;

        const grandTotal = subTotalPrice + taxAmount;
        const total = document.getElementById('grand-total');
        total.innerText = grandTotal;
    }
});