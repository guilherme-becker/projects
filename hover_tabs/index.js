let btnsEl = document.querySelectorAll(".tabs-container button");
let contentEl = document.querySelectorAll(".content-container .content");

[...btnsEl].forEach(btn => {

    btn.addEventListener("mouseover", e => {

        [...contentEl].forEach(content => {

            content.classList.remove("active");

            if(content.dataset.id === e.target.id) content.classList.add("active");

        });

        

    });

});