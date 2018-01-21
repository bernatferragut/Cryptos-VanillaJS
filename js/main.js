// JS
console.log("JS Ready to Rock!!!...");

// Selecting Elements
let myContainer = document.getElementById('cryptoContainer');
let myButtton = document.getElementById('button');
myButtton.addEventListener('click', getCryptos);

// GET API DATA
// 1. AJAX + JSON => Cryptocompare API
// Cryptocompare/Price/Multi (returns Object + Multicoin object prices)
let cryptosUrl = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,EOS,IOT&tsyms=USD";

function getCryptos() {
    let myRequest = new XMLHttpRequest();
    myRequest.open('GET',cryptosUrl);
    myRequest.onload = function() {
        let myResponse = JSON.parse(myRequest.responseText);
        // console.log(myResponse.BTC.USD);
        renderHTML(myResponse);
    }
    myRequest.send();
}


function renderHTML(data) {
    // let myCryptoList = ['BTC', 'EOS', 'IOT'];
    // for (let i=0; i<myCryptoList.length; i++) {
    //     let htmlString = '<li> 1 ' + data.myCryptoList[i].USD + ' USD</li>';
    //     myContainer.insertAdjacentHTML('beforeend', htmlString);
    // }

    let htmlString = '<li> 1 BTC = ' + data.BTC.USD + ' USD</li>';
    myContainer.insertAdjacentHTML('beforeend', htmlString);
    let htmlString2 = '<li> 1 EOS = ' + data.EOS.USD + ' USD</li>';
    myContainer.insertAdjacentHTML('beforeend', htmlString2);
    let htmlString3 = '<li> 1 IOT = ' + data.IOT.USD + ' USD</li>';
    myContainer.insertAdjacentHTML('beforeend', htmlString3);

}

// GET API DATA
// 1. Fetch + JSON + ES6 Literals=> Cryptocompare API
// Cryptocompare/Price/Multi (returns Object + Multicoin object prices)









