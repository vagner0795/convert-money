const input = document.querySelector('.input-currency') //! input
const convertButton = document.querySelector('.convert-button') //! button
const currencyValueToConvert = document.querySelector('.currency-value-to-convert') //! value to convert
const currencyValueConverted = document.querySelector('.currency-value') //! value converted
const currencySelect = document.querySelector('.currency-select') //! select coin to change
const currencyName = document.querySelector('#currency-name') //! paragraph coin name
const currencyImage = document.querySelector('.currency-img') //! image coin

//? Intl.NumberFormat - Javascript Library to format values

// format values function
function convertValues() {
    const inputCurrencyValue = input.value

    const dolarToday = 4.8
    const euroToday = 6.3


    if (currencySelect.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {

    if (currencySelect.value == 'dolar') {

        currencyName.innerHTML = 'Dólar Americano'
        currencyImage.src = './assets/dolar.png'
    }

    if(currencySelect.value == 'euro'){

        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }



    convertValues()
}


currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)






