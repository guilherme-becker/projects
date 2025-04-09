let poundInputEl = document.querySelector("#pounds");
let displayEl = document.querySelector("#display");
let errorEl = document.querySelector("#error");

let errorTime;
let displayTime;

poundInputEl.addEventListener("input", e => {

    if(poundInputEl.value <= 0 || Number.isNaN(poundInputEl.value)) {

        errorEl.innerHTML = "Invalid input value!";

        clearTimeout(errorTime);

        errorTime = setTimeout(() => {

            poundInputEl.value = "";
            errorEl.innerHTML = "";

        }, 2000);

    } else {
     
        displayEl.innerHTML = `Your weight in kg is: ${(poundInputEl.value / 2.2).toFixed(2)}`;
        
        clearTimeout(displayTime);

        displayTime = setTimeout(() => {

            poundInputEl.value = "";
            displayEl.innerHTML = `Your weight in kg is:`;

        }, 6000);

    }

});