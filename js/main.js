// JS
console.log("JS Ready to Rock!!!...");

// Selecting Elements
let myContainer = document.getElementById('cryptoContainer');
let myButtton = document.getElementById('button');
myButtton.addEventListener('click', getCryptos);

// GET API DATA
// 1. AJAX + JSON => Cryptocompare API
// Cryptocompare/Price/Multi (returns Object + Multicoin object prices)
let cryptosUrl = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,LTC,XLM,EOS,TRX,IOT,BTG,XRB,BTS,BAT,XRB&tsyms=USD";

function getCryptos() {
    let myRequest = new XMLHttpRequest();
    myRequest.open('GET',cryptosUrl);
    myRequest.onload = function() {
        let myResponse = JSON.parse(myRequest.responseText);
        console.log(myResponse );
        console.log(hodl);
        renderHTML(myResponse, hodl);
    }
    myRequest.send();
}

// THIS IS MY OWN OBJECT
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
        <table class="u-full-width">
        <thead>
            <tr>
                <th>CRYPTO</th>
                <th>VALUE</th>
                <th>HODL</th>
                <th>USD</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>BAT</td>
                <td>${data.BAT.USD}</td>
                <td>${hodl.BAT.amount}</td>
                <td>${Math.round(hodl.BAT.amount * data.BAT.USD)}</td>
            </tr>
                <td>BTC</td>
                <td>${data.BTC.USD}</td>
                <td>${hodl.BTC.amount}</td>
                <td>${Math.round(hodl.BTC.amount * data.BTC.USD)}</td>
            </tr>
                <td>BTG</td>
                <td>${data.BTG.USD}</td>
                <td>${hodl.BTG.amount}</td>
                <td>${Math.round(hodl.BTG.amount * data.BTG.USD)}</td>
            </tr>
                <td>BTS</td>
                <td>${data.BTS.USD}</td>
                <td>${hodl.BTS.amount}</td>
                <td>${Math.round(hodl.BTS.amount * data.BTS.USD)}</td>
            </tr>
                <td>EOS</td>
                <td>${data.EOS.USD}</td>
                <td>${hodl.EOS.amount}</td>
                <td>${Math.round(hodl.EOS.amount * data.EOS.USD)}</td>
            </tr>
                <td>IOT</td>
                <td>${data.IOT.USD}</td>
                <td>${hodl.IOT.amount}</td>
                <td>${Math.round(hodl.IOT.amount * data.IOT.USD)}</td>
            </tr>
                <td>LTC</td>
                <td>${data.LTC.USD}</td>
                <td>${hodl.LTC.amount}</td>
                <td>${Math.round(hodl.LTC.amount * data.LTC.USD)}</td>
            </tr>
                <td>TRX</td>
                <td>${data.TRX.USD}</td>
                <td>${hodl.TRX.amount}</td>
                <td>${Math.round(hodl.TRX.amount * data.TRX.USD)}</td>
            </tr>
                <td>XRB</td>
                <td>${data.XRB.USD}</td>
                <td>${hodl.XRB.amount}</td>
                <td>${Math.round(hodl.XRB.amount * data.XRB.USD)}</td>
            </tr>
                <td>XLM</td>
                <td>${data.XLM.USD}</td>
                <td>${hodl.XLM.amount}</td>
                <td>${Math.round(hodl.XLM.amount * data.XLM.USD)}</td>
             </tr>
        </tbody>
        <thead>
        <tr>
            <th>TOTAL</th>
            <th>----</th>
            <th>----</th>
            <th>${Math.round(hodl.BAT.amount * data.BAT.USD)+Math.round(hodl.BTC.amount * data.BTC.USD)+Math.round(hodl.BTG.amount * data.BTG.USD)+Math.round(hodl.BTS.amount * data.BTS.USD)+Math.round(hodl.EOS.amount * data.EOS.USD)+Math.round(hodl.IOT.amount * data.IOT.USD)+Math.round(hodl.LTC.amount * data.LTC.USD)+Math.round(hodl.TRX.amount * data.TRX.USD)+Math.round(hodl.XLM.amount * data.XLM.USD)+Math.round(hodl.XRB.amount * data.XRB.USD)}</th>
        </tr>
    </thead>
        </table>
    `
    myContainer.insertAdjacentHTML('beforeend', htmlString);

}

// GET API DATA
// 1. Fetch + JSON + ES6 Literals=> Cryptocompare API
// Cryptocompare/Price/Multi (returns Object + Multicoin object prices)
