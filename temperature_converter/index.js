let celsiusEl = document.querySelector("#celsius");
let farenheitEl = document.querySelector("#farenheit");
let kelvinEl = document.querySelector("#kelvin");

celsiusEl.addEventListener("change", e => {

    if(celsiusEl.value) {

        farenheitEl.value = ((Number(celsiusEl.value) * 9 / 5) + 32).toFixed(2);
        kelvinEl.value = (Number(celsiusEl.value) + 273.15).toFixed(2);        

    }

});

farenheitEl.addEventListener("change", e => {

    if(farenheitEl.value) {

        celsiusEl.value = ((Number(farenheitEl.value) - 32) * 5 / 9).toFixed(2);
        kelvinEl.value = ((Number(farenheitEl.value) - 32) * 5 / 9 + 273.15).toFixed(2);

    }

});

kelvinEl.addEventListener("change", e => {

    if(kelvinEl.value) {

        celsiusEl.value = (Number(kelvinEl.value) - 273.15).toFixed(2);
        farenheitEl.value = ((Number(kelvinEl.value) - 273.15) * 9 / 5 + 32).toFixed(2); 

    }

});