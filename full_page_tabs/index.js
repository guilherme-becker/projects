let btnsEl = document.querySelectorAll("button");
let contentsEl = document.querySelectorAll(".content");


displayDefault();

function displayDefault() {

    let color;

    [...btnsEl].forEach(btn => {
        
        color = btn.dataset.color;

        if(color === "red") btn.style.backgroundColor = color;

    });


}

[...btnsEl].forEach((btn , i) => {

    btn.addEventListener("click", e => {

        [...btnsEl].forEach(item => {
            item.style.backgroundColor = "#333333";
        });

        btn.style.backgroundColor = btn.dataset.color;

        [...contentsEl].forEach((content)=> {
            content.classList.remove("active");
        });

        [...contentsEl][i].classList.add("active");

    });

});