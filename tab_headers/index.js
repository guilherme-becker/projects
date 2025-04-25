let contentEl = document.querySelectorAll(".content");
let btnsEl = document.querySelectorAll("button");

displayContent(true);

[...btnsEl].forEach(btn => {

    btn.addEventListener("click", e => {

        [...btnsEl].forEach(item => {

            if(item.id === e.target.id) {
                item.style.backgroundColor = item.className;
                item.style.color = "#ffffff";
            } else {
                item.style.backgroundColor = "#b4b3b3";
                item.style.color = "#000000";
            }

        });

        [...contentEl].forEach(content => {

            content.style.display = "none";

            if (content.classList[1] === "bg-" + e.target.id) {
                content.style.display = "flex";
            }

        });

    });

});

function displayContent(defaultDisplay = false) {

    let btn;

    if(defaultDisplay) btn = document.querySelector("#london");

    [...contentEl].forEach(content => {

        content.style.display = "none";
    
        if (defaultDisplay && content.classList.contains("bg-london")){
             content.style.display = "flex";
             btn.style.backgroundColor = "red";
             btn.style.color = "#ffffff";
        }
    
    });

}