let resultsDisplay = document.querySelector(".results");
let inputSearch = document.querySelector("#search");
let options = ["PHP", "JavaScript", "Python", "Bootstrap", "Jquery", "Node.js", "C#", "Java", "HTML", "CSS"];

function display(options) {

    let p;

    options.forEach(option => {

        p = document.createElement("p");

        p.innerHTML = option;

        resultsDisplay.appendChild(p);

    });

}

function clearDisplay() {

    resultsDisplay.innerHTML = "";

}

display(options);

inputSearch.addEventListener("keyup", e => {

    clearDisplay();

    if(inputSearch.value !== "") {

        display(options.filter(value => { return value.toLowerCase().startsWith(inputSearch.value.toLowerCase()); }));

    } else {
        display(options);
    }

});