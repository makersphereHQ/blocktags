var front = document.getElementById('blocktags-display-front');
var check = document.getElementById('blocktags-display-check');
var result = document.getElementById('blocktags-display-result');
var block = document.getElementById('blocktags-amount-block');
var address = document.getElementById('blocktags-btn').getAttribute('data-address');
var amount = document.getElementById('blocktags-amount');
var qrcode = document.getElementById('blocktags-qrcode');
var link = document.getElementById('blocktags-qrcode-link');
var btn = document.getElementById('blocktags-btn');
var btc = document.getElementById('blocktags-btc');
function getExchangeRate (v) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://blockchain.info/ticker?cors=true');
    xhr.onload = function () {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
                var rate = (1 / (json.USD.last));
                console.log('exchange rate: '+rate);
                var value = v * (rate).toFixed(8);
                getQRCode(value);
            }
        }
    };
    xhr.send();
}
function statusCallback () {
    var satoshi = parseInt(this.responseText);
    if (satoshi > 0) {
        var bitcoin = satoshi / 100000000;
        console.log('bitcoins received: '+bitcoin);
        btc.innerHTML = bitcoin;
        check.className = 'app__display app__display--is-check animated zoomOut';
        setTimeout(function () {
            check.className = 'app__display app__display--is-check app__display--is-hidden animated';
            result.className = 'app__display app__display--is-result animated fadeInDown';
        }, 500);
    } else {
        setTimeout(getStatus, 5000);
        console.log('no bitcoins received');
    }
}
function getStatus () {
    var time = new Date().getTime();
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', statusCallback);
    xhr.open('GET', 'https://blockchain.info/q/getreceivedbyaddress/'+address+'?start_time='+time);
    //xhr.open('GET', 'http://127.0.0.1:4001/'+address+'?start_time='+time);
    xhr.send();
    console.log('getting status');
}
function getQRCode (a) {
    qrcode.innerHTML = '';
    link.href = '';
    link.href = 'bitcoin:'+address+'?amount='+a;
    var qrCode = new QRCode(qrcode, {
        text: 'bitcoin:'+address+'?amount='+a,
        width: 400,
        height: 400,
        colorDark : '#000000',
        colorLight : '#ffffff',
        correctLevel : QRCode.CorrectLevel.H
    });
    console.log('qrcode generated');
}
function doAdjustment(e) {
    var self = document.getElementById('blocktags-amount');
    var length = e.value.length;
    switch (length) {
        case 0:
            self.style.width = '1em';
            break;
        case 1:
            self.style.width = '1em';
            break;
        case 2:
            self.style.width = '1.5em';
            break;
        case 3:
            self.style.width = '2em';
            break;
        case 4:
            self.style.width = '2.5em';
    }
}
function doFocus() {
    setTimeout(function () {
        amount.focus();
    },1100);
}
function blocktags () {
    var value = amount.value;
    if (value > 0) {
        console.log('starting');
        getExchangeRate(value);
        getStatus();
        front.className = 'app__display app__display--is-front animated zoomOut';
        setTimeout(function () {
            front.className = 'app__display app__display--is-front app__display--is-hidden animated';
            check.className = 'app__display app__display--is-check animated fadeInDown';
        }, 500);
    } else {
        console.log('no input');
        block.className = 'app__amount animated wobble';
        setTimeout(function () {
            block.className = 'app__amount';
        }, 1100);
        doFocus();
    }
}
btn.addEventListener('click', blocktags);
window.addEventListener('load', doFocus);
