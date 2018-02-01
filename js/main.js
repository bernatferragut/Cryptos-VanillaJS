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
    BAT : {symbol: "BAT", amount: 10},
    BTC : {symbol: "BTC", amount: 10},
    BTG : {symbol: "BTG", amount: 10},
    BTS : {symbol: "BTS", amount: 10},
    EOS : {symbol: "EOS", amount: 10},
    IOT : {symbol: "IOT", amount: 10},
    LTC : {symbol: "LTC", amount: 10},
    TRX : {symbol: "TRX", amount: 10},
    XLM : {symbol: "XLM", amount: 10},
    XRB : {symbol: "XRB", amount: 10},
}

function renderHTML(theResponse, hodl) {
    // BTC
    let htmlString =
    `
    <div class="item item1">${hodl.BAT.symbol}</div>
    <div class="item item2">${hodl.BAT.amount}</div>
    <div class="item item3">${Math.round(theResponse.BAT.USD)}</div>
    <div class="item item4">${hodl.BAT.amount * theResponse.BAT.USD}</div>
    <div class="item item5">${hodl.BTC.symbol}</div>
    <div class="item item6">${hodl.BTC.amount}</div>
    <div class="item item7">${theResponse.BTC.USD}</div>
    <div class="item item8">${Math.round(hodl.BTC.amount * theResponse.BTC.USD)}</div>
    <div class="item item9">${hodl.BTG.symbol}</div>
    <div class="item item10">${hodl.BTG.amount}</div>
    <div class="item item11">${theResponse.BTG.USD}</div>
    <div class="item item12">${Math.round(hodl.BTG.amount * theResponse.BTG.USD)}</div>
    <div class="item item13">${hodl.BTS.symbol}</div>
    <div class="item item14">${hodl.BTS.amount}</div>
    <div class="item item15">${theResponse.BTS.USD}</div>
    <div class="item item16">${Math.round(hodl.BTS.amount * theResponse.BTS.USD)}</div>
    <div class="item item17">${hodl.EOS.symbol}</div>
    <div class="item item18">${hodl.EOS.amount}</div>
    <div class="item item19">${theResponse.EOS.USD}</div>
    <div class="item item20">${Math.round(hodl.EOS.amount * theResponse.EOS.USD)}</div>
    <div class="item item21">${hodl.IOT.symbol}</div>
    <div class="item item22">${hodl.IOT.amount}</div>
    <div class="item item23">${theResponse.IOT.USD}</div>
    <div class="item item24">${Math.round(hodl.IOT.amount * theResponse.IOT.USD)}</div>
    <div class="item item25">${hodl.LTC.symbol}</div>
    <div class="item item26">${hodl.LTC.amount}</div>
    <div class="item item27">${theResponse.LTC.USD}</div>
    <div class="item item28">${Math.round(hodl.LTC.amount * theResponse.LTC.USD)}</div>
    <div class="item item29">${hodl.TRX.symbol}</div>
    <div class="item item30">${hodl.TRX.amount}</div>
    <div class="item item31">${theResponse.TRX.USD}</div>
    <div class="item item32">${Math.round(hodl.TRX.amount * theResponse.TRX.USD)}</div>
    <div class="item item33">${hodl.XLM.symbol}</div>
    <div class="item item34">${hodl.XLM.amount}</div>
    <div class="item item35">${theResponse.XLM.USD}</div>
    <div class="item item36">${Math.round(hodl.XLM.amount * theResponse.XLM.USD)}</div>
    <div class="item item37">${hodl.XRB.symbol}</div>
    <div class="item item38">${hodl.XRB.amount}</div>
    <div class="item item39">${theResponse.XRB.USD}</div>
    <div class="item item40">${Math.round(hodl.XRB.amount * theResponse.XRB.USD)}</div>
    <div class="item item41">TOTAL</div>
    <div class="item item42">---</div>
    <div class="item item43">---</div>
    <div class="item item44">
    ${Math.round(hodl.BAT.amount * theResponse.BAT.USD)+Math.round(hodl.BTC.amount * theResponse.BTC.USD)+Math.round(hodl.BTG.amount * theResponse.BTG.USD)+Math.round(hodl.BTS.amount * theResponse.BTS.USD)+Math.round(hodl.EOS.amount * theResponse.EOS.USD)+Math.round(hodl.IOT.amount * theResponse.IOT.USD)+Math.round(hodl.LTC.amount * theResponse.LTC.USD)+Math.round(hodl.TRX.amount * theResponse.TRX.USD)+Math.round(hodl.XLM.amount * theResponse.XLM.USD)+Math.round(hodl.XRB.amount * theResponse.XRB.USD)}
    </div>
    `
    myContainer.insertAdjacentHTML('beforeend', htmlString);

}

// window.addEventListener('load', function() {
//     console.log('window - load - bubble');
//     getCryptos();
//   });