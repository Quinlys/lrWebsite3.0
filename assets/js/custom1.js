fetch("https://ipinfo.io/json?token=fe72b22c09ea97").then(
    (response) => response.json()
).then(
    (jsonResponse) => {
        const isUkraine = jsonResponse.country === "UA";
        if (isUkraine) {
            document.getElementById("notUkraine").remove();
        } else {
            document.getElementById("sale-time").remove();
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
    if (counter == 0) {
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
    if (counter == 0) {
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
    if (counter == 0) {
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
    if (counter == 0) {
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

// New BLOCK for sales DAY.

let myDate = new Date();
let isSaleDay = myDate.getUTCDay() === 0 || myDate.getUTCDay() === 3;
console.log(isSaleDay);

if (isSaleDay) {
    let notSaleElem = document.getElementsByClassName("not-sale");
    let saleElem = document.getElementsByClassName("sale");
    while(notSaleElem.length) {
        notSaleElem[0].parentNode.removeChild(notSaleElem[0]);
    }
    for (let i = 0; i < saleElem.length; i++) {
        saleElem[i].style.display = "block";
    }


}