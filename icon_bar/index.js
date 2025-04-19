let iconsHorizontal = document.querySelectorAll(".horizontal li");
let iconsVertical = document.querySelectorAll(".vertical li");

function activeIcon(icons) {

    [...icons].forEach(icon => {
      
        icon.addEventListener("click", e => {

            [...icons].forEach(el => {
                el.classList.remove("active");
            });

            icon.classList.add("active");

        });
        
    })

}

activeIcon(iconsHorizontal);
activeIcon(iconsVertical);