// JS
console.log("JS Working...");

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

// Fetching the Data through AJAX/XML

