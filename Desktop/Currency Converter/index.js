const currencyFirstEL = document.getElementById("currency-first");



const worthFirstEl = document.getElementById("worth-first")

const currencySecondEL = document.getElementById("currency-second");

const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange");

function updateRate(){
    fetch('https://v6.exchangerate-api.com/v6/66a998a82bd379fe0bf3c3ea/latest/${currencyFirstEl.value}').then((res)=>res.json
    ()).then((data)=>
        console.log(data));

}

currencyFirstEL.addEventListener("change", updateRate)
currencySecondEL.addEventListener("change", updateRate)

worthFirstEl.addEventListener("input", updateRate)