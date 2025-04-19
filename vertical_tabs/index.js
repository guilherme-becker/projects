let btnsEl = document.querySelectorAll("button");
let panelsEl = document.querySelectorAll(".content");

[...btnsEl].forEach((btn, i) => {

    btn.addEventListener("click", e => {

        [...btnsEl].forEach(item => {
            item.classList.remove("active");
        });

        e.target.classList.add("active");

        [...panelsEl].forEach(panel => {
            panel.classList.add("d-none");
        });

        [...panelsEl][i].classList.remove("d-none");

    });

});