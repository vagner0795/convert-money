
const input = document.querySelector('.input-currency') //! input
const convertButton = document.querySelector('.convert-button') //! button
const currencyValueToConvert = document.querySelector('.currency-value-to-convert') //! value to convert
const currencyValueConverted = document.querySelector('.currency-value') //! value converted
const currencySelect = document.querySelector('.currency-select') //! select coin to change
const currencyName = document.querySelector('#currency-name') //! paragraph coin name
const currencyImage = document.querySelector('.currency-img') //! image coin


//? Intl.NumberFormat - Javascript Library to format values

// format values function
const convertValues = async () => {

    const inputCurrencyValue = input.value
    
    const data = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,JPY-BRL').then(response => response.json())



    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const libra = data.GBPBRL.high
    const iene = data.JPYBRL.high



    if (currencySelect.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolar)
    }

    if (currencySelect.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euro)

    }

    if (currencySelect.value == 'libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libra)

    }

    if (currencySelect.value == 'iene') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / iene)

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

    if (currencySelect.value == 'euro') {

        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }

    if (currencySelect.value == 'libra') {

        currencyName.innerHTML = 'Libra esterlina'
        currencyImage.src = './assets/libra.png'
    }
    if (currencySelect.value == 'iene') {

        currencyName.innerHTML = 'Iene Japones'
        currencyImage.src = './assets/iene.png'
    }
    convertValues()
}


currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)






