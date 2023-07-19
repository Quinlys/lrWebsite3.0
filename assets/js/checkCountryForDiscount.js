fetch("https://ipinfo.io/json?token=fe72b22c09ea97").then(
    (response) => response.json()
).then(
    (jsonResponse) => {
        const isUkraine = jsonResponse.country === "UA";
        if (isUkraine) {
            document.getElementById("notUkraine").remove();
        }
    }
)

//set variable
var counter = 0;

//function
window.addEventListener("DOMContentLoaded",move=() =>{
    //global condition (increment j by 1)
    if (counter == 0) {
        J = 1;
        //select element
        var elem = document.querySelector("#main-done");
        //set prefered width for element
        var width = 0;

        fetch("http://5.9.79.48:26011/status.json").then(
            (response) => response.json()
        ).then(
            (jsonResponse) => {
                const playerCount = jsonResponse.players;
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
        var elem = document.querySelector("#trio-done");
        //set prefered width for element
        var width = 0;

        fetch("http://5.9.79.48:26022/status.json").then(
            (response) => response.json()
        ).then(
            (jsonResponse) => {
                const playerCount = jsonResponse.players;
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
        var elem = document.querySelector("#mondays-done");
        //set prefered width for element
        var width = 0;

        fetch("http://5.9.79.48:26033/status.json").then(
            (response) => response.json()
        ).then(
            (jsonResponse) => {
                const playerCount = jsonResponse.players;
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
