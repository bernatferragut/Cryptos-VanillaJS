// JS
console.log("JS Ready to Rock!!!...");

// Selecting Elements
let myContainer = document.getElementById('cryptoContainer');
let myButtton = document.getElementById('button');
myButtton.addEventListener('click', getCryptos);

// GET API DATA
// 1. Fetch + JSON + ES6 Literals=> Cryptocompare API
// Cryptocompare/Price/Multi (returns Object + Multicoin object prices)
let cryptosUrl = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,LTC,XLM,EOS,TRX,IOT,BTG,XRB,BTS,BAT,XRB&tsyms=USD";

function getCryptos() {
    let theResponse;
    fetch(cryptosUrl)
        .then(checkStatus) // this is only necessary to show the error if exists
        .then(blob => blob.json()) // First Promise as a Blob
        .then((res) => {
            let theResponse = res;
            renderHTML(theResponse, hodl);
        }) // Second Promise as real response
        .catch(err => console.log('There was an error', err)); // In case of Error
    }

function checkStatus(res) {
    if (res.ok){
        return res;
    }

    let error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}

// HODLS OBJECT
let hodl = {
    BAT : {amount: 10},
    BTC : {amount: 10},
    BTG : {amount: 10},
    BTS : {amount: 10},
    EOS : {amount: 10},
    IOT : {amount: 10},
    LTC : {amount: 10},
    TRX : {amount: 10},
    XLM : {amount: 10},
    XRB : {amount: 10},
}

function renderHTML(data, hodl) {
    // BTC
    let htmlString =
    `
        <div> THIS IS A TEST </div>
    `
    myContainer.insertAdjacentHTML('beforeend', htmlString);

}

