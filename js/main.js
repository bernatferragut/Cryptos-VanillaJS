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
    <div class="item item1">1</div>
    <div class="item item2">2</div>
    <div class="item item3">3</div>
    <div class="item item4">4</div>
    <div class="item item5">5</div>
    <div class="item item6">6</div>
    <div class="item item7">7</div>
    <div class="item item8">8</div>
    <div class="item item9">9</div>
    <div class="item item10">10</div>
    <div class="item item11">11</div>
    <div class="item item12">12</div>
    <div class="item item13">13</div>
    <div class="item item14">14</div>
    <div class="item item15">15</div>
    <div class="item item16">16</div>
    <div class="item item17">17</div>
    <div class="item item18">18</div>
    <div class="item item19">19</div>
    <div class="item item20">20</div>
    <div class="item item21">21</div>
    <div class="item item22">22</div>
    <div class="item item23">23</div>
    <div class="item item24">24</div>
    <div class="item item25">25</div>
    <div class="item item26">26</div>
    <div class="item item27">27</div>
    <div class="item item28">28</div>
    <div class="item item29">29</div>
    <div class="item item30">30</div>
    <div class="item item31">31</div>
    <div class="item item32">32</div>
    <div class="item item33">33</div>
    <div class="item item34">34</div>
    <div class="item item35">35</div>
    <div class="item item36">36</div>
    <div class="item item37">37</div>
    <div class="item item38">38</div>
    <div class="item item39">39</div>
    <div class="item item40">40</div>
    `
    myContainer.insertAdjacentHTML('beforeend', htmlString);

}

