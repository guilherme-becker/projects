let btns = document.querySelectorAll("button");
let contentsEl = document.querySelectorAll(".content");
let btnId;

[...btns].forEach(btn => {

    btn.addEventListener("click", e => {

        [...btns].forEach(item => {

            item.classList.remove("active");

        });

        btnId = btn.dataset.id;

        [...contentsEl].forEach(tab => {

            tab.classList.add("d-none");

            if(tab.id === btnId) {
                tab.classList.remove("d-none");
                btn.classList.add("active");
            }

        });

    });
    
});
