function increaseMobileAll() {
    const inceaseMobile = document.querySelector('#mobilePlus')
   inceaseMobile.addEventListener('click', function(){
        const mobileInput = document.querySelector('#mobileInput').value;
        const mobileInputNumber = parseInt(mobileInput);
        const mobileInputIncease = mobileInputNumber + 1;
        document.querySelector('#mobileInput').value = mobileInputIncease;
        const fixedMobilePrice = mobileInputIncease * 1200;
        const finalMobilePrice = document.querySelector('#dubleNumber').innerText = fixedMobilePrice;
        const casePrice = document.querySelector('#backCover').innerText;
        const casePriceNumber = parseInt(casePrice)
        const finalCasePrice = document.querySelector('#backCover').innerText = casePriceNumber;
        const mobileCase = finalMobilePrice + finalCasePrice;
        console.log(mobileCase)
        const subtotal = document.querySelector('#addNumber').innerText = mobileCase;
        const taxtParcent = subtotal * 0.1;
        const totalTax = document.querySelector('#taxAmount').innerText = taxtParcent;
        const totalAmount = totalTax + subtotal ; 
        const totalNumber = document.querySelector('#totalNumber').innerText = totalAmount;

        return totalNumber
})}
increaseMobileAll()

function decreaseMobileAll() {
    const decreaseMobile = document.querySelector('#mobileMinus')
    decreaseMobile.addEventListener('click', function(){
        const mobileInput = document.querySelector('#mobileInput').value;
        const mobileInputNumber = parseInt(mobileInput) - 1;
        document.querySelector('#mobileInput').value = mobileInputNumber;
        const MobilePrice = mobileInputNumber * 1200;
        const finalmobilePrice = document.querySelector('#dubleNumber').innerText = MobilePrice;
        const casePrice = document.querySelector('#backCover').innerText;
        const casePriceNumber = parseInt(casePrice);
        const finalCasePrice = casePriceNumber + finalmobilePrice;
        const subtotal = document.querySelector('#addNumber').innerText = finalCasePrice;
        const taxtParcent = subtotal * 0.1;
        const totalTax = document.querySelector('#taxAmount').innerText = taxtParcent;
        const totalAmount = totalTax + subtotal ; 
        document.querySelector('#totalNumber').innerText = totalAmount;

        return 
})}
decreaseMobileAll()

function increaseCaseAll() {
    const inceaseCase = document.querySelector('#casePlus')
    inceaseCase.addEventListener('click', function(){
        const caseInput = document.querySelector('#caseInput').value;
        const caseInputNumber = parseInt(caseInput);
        const caseInputIncrease = caseInputNumber + 1;
        document.querySelector('#caseInput').value = caseInputIncrease;
        const CasePrice = caseInputIncrease * 50;
        const finalCasePrice = document.querySelector('#backCover').innerText = CasePrice;
        const mobilePrice = document.querySelector('#dubleNumber').innerText;
        const mobilePriceNumber = parseInt(mobilePrice)
        const finalMobilePrice = document.querySelector('#dubleNumber').innerText = mobilePriceNumber;
        const caseMobile = finalCasePrice + finalMobilePrice;
        const subtotal = document.querySelector('#addNumber').innerText = caseMobile;
        const taxtParcent = subtotal * 0.1;
        const totalTax = document.querySelector('#taxAmount').innerText = taxtParcent;
        const totalAmount = totalTax + subtotal ; 
        document.querySelector('#totalNumber').innerText = totalAmount;

        return 
})}
increaseCaseAll()

function decreaseCaseAll() {
    const decreaseCase = document.querySelector('#caseMinus')
    decreaseCase.addEventListener('click', function(){
        const caseInput = document.querySelector('#caseInput').value;
        const caseInputNumber = parseInt(caseInput);
        const caseInputdecrease = caseInputNumber - 1;
        document.querySelector('#caseInput').value = caseInputdecrease;
        const CasePrice = caseInputdecrease * 50;
        const finalCasePrice = document.querySelector('#backCover').innerText = CasePrice;
        const mobilePrice = document.querySelector('#dubleNumber').innerText;
        const mobilePriceNumber = parseInt(mobilePrice);
        const CaseMobilePrice = mobilePriceNumber + finalCasePrice;
        const subtotal = document.querySelector('#addNumber').innerText = CaseMobilePrice;
        const taxtParcent = subtotal * 0.1;
        const totalTax = document.querySelector('#taxAmount').innerText = taxtParcent;
        const totalAmount = totalTax + subtotal ; 
        document.querySelector('#totalNumber').innerText = totalAmount;
        
        return 
})}
decreaseCaseAll()

const removeItemMobile = document.querySelector('#removeItemMobile');
removeItemMobile.addEventListener('click', function(){
    const removeItem = document.querySelector('#removeMobile')
    removeItem.style.display = 'none'
})

const removeItemCase = document.querySelector('#removeItemCase');
removeItemCase.addEventListener('click', function(){
    const removeItem = document.querySelector('#removeCase')
    removeItem.style.display = 'none'
})

const confarmOrder = document.querySelector('#confarm')
confarmOrder.addEventListener('click', function(){
    const hideCart = document.querySelector('.cart');
    hideCart.style.display = 'none'

    const showMassage = document.querySelector('#congrate')
    showMassage.style.display = 'block'
})