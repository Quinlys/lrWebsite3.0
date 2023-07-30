
const currentUrl = window.location.href;

for (let i = 0; i < currentUrl.length; i++) {
    if (currentUrl[i] === '#') {
        // location = 'https://liberty-rust.com.ua/';
    }
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


let notSaleElem = document.getElementsByClassName("not-sale");
let saleElem = document.getElementsByClassName("sale");
let salePrice = document.getElementsByClassName('sale-item-price-page');
let itemPricePage = document.getElementsByClassName('item-price-page');
let pricesElem = document.getElementsByClassName('prices');
let myDate = new Date();
let slotsCount = {
    'elite': 0,
    'vip': 0,
    'sponsor': 0,
    'blueprints': 0,
    'components': 11,
    'resources': 5,
    'territory': 5,
    'farmer': 7,
    'workbench': 3,
    'turrets': 4,
    'fuel': 4
}

let isSaleDay = ((myDate.getUTCDay() === 0 || (myDate.getUTCDay() === 1 && myDate.getUTCHours() <= 18)) || (myDate.getUTCDay() === 3 || (myDate.getUTCDay() === 4 && myDate.getUTCHours() <= 18)));
isSaleDay = false;
let prices = {};

if (isSaleDay) {
    prices = {
        'elite': 399,
        'vip': 199,
        'sponsor': 599,
        'blueprints': 399,
        'components': 79,
        'resources': 69,
        'territory': 79,
        'farmer': 69,
        'workbench': 59,
        'turrets': 79,
        'fuel': 69
    }

    while(notSaleElem.length) {
        notSaleElem[0].parentNode.removeChild(notSaleElem[0]);
    }
    for (let i = 0; i < pricesElem.length; i++) {
        pricesElem[i].style.marginTop = '-20px';
    }
    for (let i = 0; i < saleElem.length; i++) {
        saleElem[i].style.display = "block";
    }
    for (let i = 0; i < itemPricePage.length; i++) {
        itemPricePage[i].className = 'item-price-page red-line';
    }
    console.log(salePrice);
    for (let i = 0; i < salePrice.length; i++ ) {
        salePrice[i].style.display = 'block';
    }
} else {
    prices = {
        'elite': 399,
        'vip': 199,
        'sponsor': 599,
        'blueprints': 399,
        'components': 159,
        'resources': 139,
        'territory': 159,
        'farmer': 139,
        'workbench': 119,
        'turrets': 159,
        'fuel': 139
    }
}

let whereUserPackage = '';
let whereUserServer = '';
let basket = [];

if (getCookie('basket')) {
    basket = JSON.parse(getCookie('basket'));
}

let shortDescription = {
    'elite': 'Elite привілея',
    'vip': 'VIP привілея',
    'sponsor': 'Спонсорство',
    'blueprints': 'Відкриття всіх вивчень!',
    'components': 'Набір компонентів',
    'resources': 'Набір ресурсів',
    'territory': 'Набір "Власна територія"',
    'farmer': 'Набір фармера',
    'workbench': 'Набір "3 верстаки"',
    'turrets': 'Набір "Турелі + ППО"',
    'fuel': 'Набір "Паливний магнат"'
}

let addBasketButtons = document.getElementsByClassName('add-to-basket-button');
let basketItems = document.getElementById('basket-items');
let basketButtons = document.getElementsByClassName('basket-button');
let sumText = document.getElementById('sum');
let sum = 0;

recountBasket();
changeServerNameInHeaders();
buildBasket();

fetch("https://ipinfo.io/json?token=fe72b22c09ea97").then(
    (response) => response.json()
).then(
    (jsonResponse) => {
        const isUkraine = jsonResponse.country === "UA";
        if (isUkraine) {
            document.getElementById("notUkraine1").remove();
            document.getElementById("notUkraine2").remove();
        } else {
            document.getElementById("sale-time1").remove();
            document.getElementById("sale-time2").remove();
        }
    }
)

//set variable
var counter = 0;

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImY4ZTZiZWQ1YmJhOTMzYmQiLCJpYXQiOjE2ODM3MjAwMDYsIm5iZiI6MTY4MzcyMDAwNiwiaXNzIjoiaHR0cHM6Ly93d3cuYmF0dGxlbWV0cmljcy5jb20iLCJzdWIiOiJ1cm46dXNlcjo2NDEzMTEifQ.o0KyjHAo9fWjsMVDdrXQGg7QlsELr-nAG1HzvD7AhMM");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://api.battlemetrics.com/servers/18419772", requestOptions)
    .then(response => response.text())

//function
window.addEventListener("DOMContentLoaded",move=() =>{
    //global condition (increment j by 1)
    if (counter === 0) {
        J = 1;
        //select element
        var elem = document.querySelector("#main-done");
        //set prefered width for element
        var width = 0;

        fetch("https://api.battlemetrics.com/servers/18419772", requestOptions).then(
            (response) => response.json()
        ).then(
            (jsonResponse) => {
                const playerCount = jsonResponse.data.attributes.players;
                var  main  = setInterval(frame,10);
                //function for width
                function frame() {
                    if (playerCount === 0) {
                        elem.innerHTML = "Сервер перезапускається";
                        elem.style.width = 100 + "%"
                    }
                    //our width should be :70 + "%"
                    if (width >= playerCount) {
                        //clear
                        clearInterval(main);
                    } else {
                        //increment width
                        width++;
                        //assign percentages to our width as a unit
                        elem.style.width = (width / 3) + "%";
                        elem.innerHTML = width + ' / 300';
                        if (width < 45) {
                            elem.innerHTML = width;
                        } else {
                            elem.innerHTML = width + ' / 300';
                        }
                    }
                }
            }
        )

    }
});

//function
window.addEventListener("DOMContentLoaded",move=() =>{
    //global condition (increment j by 1)
    if (counter === 0) {
        J = 1;
        //select element
        var elem = document.querySelector("#duo-done");
        //set prefered width for element
        var width = 0;

        fetch("https://api.battlemetrics.com/servers/18561310", requestOptions).then(
            (response) => response.json()
        ).then(
            (jsonResponse) => {
                const playerCount = jsonResponse.data.attributes.players;
                var  main  = setInterval(frame,10);
                //function for width
                function frame() {
                    if (playerCount === 0) {
                        elem.innerHTML = "Сервер перезапускається";
                        elem.style.width = 100 + "%"
                    }
                    //our width should be :70 + "%"
                    if (width >= playerCount) {
                        //clear
                        clearInterval(main);
                    } else {
                        //increment width
                        width++;
                        //assign percentages to our width as a unit
                        elem.style.width = (width / 2) + "%";
                        elem.innerHTML = width + ' / 200';
                        if (width < 30) {
                            elem.innerHTML = width;
                        } else {
                            elem.innerHTML = width + ' / 200';
                        }
                    }
                }
            }
        )

    }
});


//function
window.addEventListener("DOMContentLoaded",move=() =>{
    //global condition (increment j by 1)
    if (counter === 0) {
        J = 1;
        //select element
        var elem = document.querySelector("#mondays-done");
        //set prefered width for element
        var width = 0;

        fetch("https://api.battlemetrics.com/servers/18368529", requestOptions).then(
            (response) => response.json()
        ).then(
            (jsonResponse) => {
                const playerCount = jsonResponse.data.attributes.players;
                var  main  = setInterval(frame,10);
                //function for width
                function frame() {
                    if (playerCount === 0) {
                        elem.innerHTML = "Сервер перезапускається";
                        elem.style.width = 100 + "%"
                    }
                    //our width should be :70 + "%"
                    if (width >= playerCount) {
                        //clear
                        clearInterval(main);
                    } else {
                        //increment width
                        width++;
                        //assign percentages to our width as a unit
                        elem.style.width = (width / 3) + "%";
                        elem.innerHTML = width + ' / 300';
                        if (width < 45) {
                            elem.innerHTML = width;
                        } else {
                            elem.innerHTML = width + ' / 300';
                        }
                    }
                }
            }
        )

    }
});

window.addEventListener("DOMContentLoaded",move=() =>{
    //global condition (increment j by 1)
    if (counter === 0) {
        J = 1;
        //select element
        var elem = document.querySelector("#squad-done");
        //set prefered width for element
        var width = 0;

        fetch("https://api.battlemetrics.com/servers/22071885", requestOptions).then(
            (response) => response.json()
        ).then(
            (jsonResponse) => {
                const playerCount = jsonResponse.data.attributes.players;
                var  main  = setInterval(frame,10);
                //function for width
                function frame() {
                    if (playerCount === 0) {
                        elem.innerHTML = "Сервер перезапускається";
                        elem.style.width = 100 + "%"
                    }
                    //our width should be :70 + "%"
                    if (width >= playerCount) {
                        //clear
                        clearInterval(main);
                    } else {
                        //increment width
                        width++;
                        //assign percentages to our width as a unit
                        elem.style.width = (width / 2) + "%";
                        elem.innerHTML = width + ' / 200';
                        if (width < 30) {
                            elem.innerHTML = width;
                        } else {
                            elem.innerHTML = width + ' / 200';
                        }
                    }
                }
            }
        )

    }
});

const date = new Date;

let wipeInfoElemMain = document.querySelector("#wipeInfoMain");
let wipeInfoElemDuo = document.querySelector("#wipeInfoDuo");
let wipeInfoElemSquad = document.querySelector("#wipeInfoSquad");
let wipeInfoElemMondays = document.querySelector("#wipeInfoMondays");

if (4 === date.getDay()) {
    wipeInfoElemMain.innerHTML = "<h4 style=\"color: red\"> СЬОГОДНІ ВАЙП О 17:00, Залітай! </h4>\n"
    wipeInfoElemDuo.innerHTML = "<h4 style=\"color: red\"> СЬОГОДНІ ВАЙП О 17:00, Залітай! </h4>\n"
    wipeInfoElemSquad.innerHTML = "<h4 style=\"color: red\"> СЬОГОДНІ ВАЙП О 17:00, Залітай! </h4>\n"
}  else if ( 1 === date.getDay()) {
    wipeInfoElemMondays.innerHTML = "<h4 style=\"color: red\"> СЬОГОДНІ БУВ ВАЙП О 17:00, Залітай! </h4>\n"
}

// SHOP

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


for (let i = 0; i < addBasketButtons.length; i++) {
    addBasketButtons[i].addEventListener('click', addItemToBasket)
}

for (let i = 0; i < basketButtons.length; i++) {
    basketButtons[i].addEventListener('click', buildBasket)
}

function buildBasket() {
    basketItems.innerHTML = '';
    if (getCookie('basket') !== undefined && basket.length !== 0) {
        let basket = JSON.parse(getCookie('basket'))
        for (let i = 0; i < basket.length; i++) {
            createBasketElement(basket[i]);
        }
    } else {
        console.log('t')
        createBasketElement(0, basket);
    }
    recountSum(prices, basket);
}

function recountSum(prices, basket) {
    let sum = 0;
    for (let i = 0; i < basket.length; i++) {
        sum += prices[basket[i]];
    }
    sumText.innerHTML = 'Загальна сума: ' + sum + ' грн';
}


function addItemToBasket() {
    if (!(getCookie('basket') === undefined)) {
        basket = JSON.parse(getCookie('basket'));
    }
    basket.push(getCookie('package'))
    for (let i = 0; i < basket.length; i++) {
        if (basket[i] === '' || basket[i] === undefined) {
            location = 'https://liberty-rust.com.ua/';
        }
    }
    setCookie('basket', JSON.stringify(basket));
    recountBasket();
}

function recountBasket() {
    let basketCookies = '';

    if (!(getCookie('basket') === undefined)) {
        basketCookies = JSON.parse(getCookie('basket'));
    }
    let basketCounter = document.getElementsByClassName('basket-counter');
    let basketCounterInside = document.getElementsByClassName('basket-counter-inside');

    for (let i = 0; i < basketCounter.length; i++) {
        basketCounter[i].innerText = basketCookies.length;
    }
    for (let i = 0; i < basketCounterInside.length; i++) {
        basketCounterInside[i].innerText = basketCookies.length;
    }
}

function testFunc() {
    alert(1)
}


function createBasketElement(itemName) {
    if (itemName === 0) {
        basketItems.innerHTML = 'Корзина пуста'
        sumText.innerHTML = '';
    } else {
        let itemBody = document.createElement('div');
        itemBody.className = 'basket-item ' + itemName + '-item';

        let imgLink = document.createElement('a');
        imgLink.href = '#' + itemName;
        imgLink.target = '_blank';

        let img = document.createElement('img');
        if (isSaleDay) {
            img.src = "images/salesImg/" + itemName + "sale.png";
        } else {
            img.src = "images/" + itemName + ".png";
        }
        img.alt = itemName;
        imgLink.appendChild(img);
        itemBody.appendChild(imgLink);

        let nameLink = document.createElement('a');
        nameLink.href = '#' + itemName;
        nameLink.target = '_blank';

        let nameItem = document.createElement('h4');
        nameItem.className = 'basket-item-name';
        nameItem.innerHTML = shortDescription[itemName];
        nameLink.appendChild(nameItem);
        itemBody.appendChild(nameLink);

        let priceItem = document.createElement('div');
        priceItem.className = 'item-price';
        priceItem.innerHTML = '<p>' + prices[itemName] + ' грн</p>'
        itemBody.appendChild(priceItem);

        let cancelItem = document.createElement('div');
        cancelItem.className = 'cancel';

        let imgCancelItem = document.createElement('img');
        imgCancelItem.src = 'images/delete.png';
        imgCancelItem.alt = 'Видалити набір з корзини';
        imgCancelItem.addEventListener('click', function () {
            for (let i = 0; i < basket.length; i++) {
                if (basket[i] === itemName) {
                    basket.splice(i, 1);
                    setCookie('basket', JSON.stringify(basket));
                    buildBasket();
                    recountBasket();
                    break;
                }
            }
        })
        cancelItem.appendChild(imgCancelItem);
        itemBody.appendChild(cancelItem);

        basketItems.appendChild(itemBody);
    }
}

function changeServerNameInHeaders() {
    if (getCookie('server') !== undefined) {
        switch (getCookie('server')) {
            case 'main': {
                document.getElementById('server-name').innerHTML = 'МАГАЗИН | MAIN'
                document.getElementById('server-name-basket').innerHTML = 'СЕРВЕР | MAIN'
                break;
            }
            case 'duo': {
                document.getElementById('server-name').innerHTML = 'МАГАЗИН | SOLO/DUO'
                document.getElementById('server-name-basket').innerHTML = 'СЕРВЕР | SOLO/DUO'
                break;
            }
            case 'mondays': {
                document.getElementById('server-name').innerHTML = 'МАГАЗИН | MONDAYS'
                document.getElementById('server-name-basket').innerHTML = 'СЕРВЕР | MONDAYS'
                break;
            }
            case 'squad': {
                document.getElementById('server-name').innerHTML = 'МАГАЗИН | TRIO/SQUAD'
                document.getElementById('server-name-basket').innerHTML = 'СЕРВЕР | TRIO/SQUAD'
                break;
            }
        }
    }
}

function clickMain() {
    document.cookie = 'server=main';
    changeServerNameInHeaders();
}
function clickDuo() {
    document.cookie = 'server=duo';
    changeServerNameInHeaders();
}
function clickMondays() {
    document.cookie = 'server=mondays';
    changeServerNameInHeaders();
}
function clickSquad() {
    document.cookie = 'server=squad';
    changeServerNameInHeaders();
}

function clickElite() {
    document.cookie = 'package=elite';
}
function clickVip() {
    document.cookie = 'package=vip';
}
function clickSponsor() {
    document.cookie = 'package=sponsor';
}
function clickBlueprints() {
    document.cookie = 'package=blueprints';
}
function clickComponents() {
    document.cookie = 'package=components';
}
function clickResources() {
    document.cookie = 'package=resources';
}
function clickTerritory() {
    document.cookie = 'package=territory';
}
function clickFarmer() {
    document.cookie = 'package=farmer';
}
function clickWorkbench() {
    document.cookie = 'package=workbench';
}
function clickTurrets() {
    document.cookie = 'package=turrets';
}
function clickFuel() {
    document.cookie = 'package=fuel';
}
function clickOwn() {
    document.cookie = 'package=fuel';
}