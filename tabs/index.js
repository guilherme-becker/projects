let btnsEl = document.querySelectorAll(".btns button");
let panelsEl = document.querySelectorAll(".panels .panel");

console.log(btnsEl);

[...btnsEl].forEach((btn, i) => {

    btn.addEventListener("click", e => {

        [...btnsEl].forEach(btnClass => {
            btnClass.classList.remove("active");
        });

        [...panelsEl].forEach(panel => {
            panel.classList.add("d-none");
            panel.classList.add("opacity-none");
        });

        btn.classList.add("active");
        [...panelsEl][i].classList.remove("d-none");
        [...panelsEl][i].classList.remove("opacity-none");

    });

});