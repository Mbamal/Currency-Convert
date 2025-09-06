const currencyFirstEL = document.getElementById("currency-first");

const worthFirstEl = document.getElementById("worth-first")

const currencySecondEL = document.getElementById("currency-second");

const exchangeRateEl = document.getElementById("exchange");

const convertBtn = document.getElementById("convert");
const exchangeResultPara = document.getElementById("exchange-result-para");

// API 
const api_key = "e9c74a9be8050c40464d33bb"
const api_url = "https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP/AMOUNT"


// Convert currency 
async function convertCurrency(){
    try {
        const amount = worthFirstEl.value;
        const fromCurrency = currencyFirstEL.value;
        const toCurrency = currencySecondEL.value;

        exchangeResultPara.textContent = "Converting..."
        
        const api_url = `https://v6.exchangerate-api.com/v6/${api_key}/pair/${fromCurrency}/${toCurrency}/${amount}`

        const res = await fetch(api_url);
        const data = await res.json();
        const {conversion_result} = data // const x = data.conversion_result

        if (conversion_result)
            exchangeResultPara.innerHTML = `${amount} ${fromCurrency} = <b>${conversion_result} ${toCurrency} </b>`;

    } catch (error) {
        console.error("Error converting currency:", error);
    }  
}

// Convert Click Event 
convertBtn.addEventListener("click", convertCurrency);

