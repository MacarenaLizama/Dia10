function changeCity() {
    alert("Cargando información meteorológica...")
}

function removeCookie() {

    let cookieWindow = document.querySelector('#cookies');
    cookieWindow.remove();
}

function changeMetric(element) {

    let temperatures = document.querySelectorAll(".max, .min");
    /*console.log(temperatures);*/

for (let i=0; i<temperatures.length; i++){

    let tempActual= Number(temperatures[i].textContent);
    /*console.log(tempActual);*/

        if (element.value === "celsius") {
            let celsiusResult=( tempActual-32) / 1.8;
            temperatures[i].textContent = parseInt(celsiusResult);
        }
        else {
        let farenheitResult=( 9 / 5) * tempActual + 32;
        temperatures[i].textContent = parseInt(farenheitResult);
        }
    }
}

