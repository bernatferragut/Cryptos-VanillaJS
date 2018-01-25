// JS
console.log("JS Ready to Rock!!!...");

// GET API DATA
// 1. AJAX + JSON => Cryptocompare API
// > Cryptocompare / Price  / Multi ( returns Object with Multicoin object prices )

let cryptosUrl = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,EOS,IOT&tsyms=USD";

function getCryptos() {
    let myRequest = new XMLHttpRequest();
    myRequest.open('GET',cryptosUrl);
    myRequest.onload = function() {
        myResponse = JSON.parse(myRequest.responseText);
        console.log(myResponse.BTC.USD + ' USD');
    }
    myRequest.send();
}



// Selecting Elements
let myButtton = document.getElementById('button');
myButtton.addEventListener('click', getCryptos);

// Crypto Object => Crypto
function Crypto(name, symbol, value) {
    // atributes
    this.name = name;
    this.symbol = symbol;
    this.value = value;

    // methods
    this.showName = function() {
        console.log(this.name);
    };
    this.showSymbol = function() {
        console.log(this.symbol);
    };
    this.showValue = function() {
        console.log(this.value);
    };
}

// Cryptos Creation
let crypto1 = new Crypto('Bitcoin', 'BTC', 13000);
let crypto2 = new Crypto('Eos', 'EOS', 15);
let crypto3 = new Crypto('Iota', 'IOT', 5);

// Example Crypto Ouput
console.log('********')
crypto1.showName();
crypto1.showSymbol();
crypto1.showValue();
console.log('========')
crypto2.showName();
crypto2.showSymbol();
crypto2.showValue();
console.log('========')
crypto3.showName();
crypto3.showSymbol();
crypto3.showValue();
console.log('********')





