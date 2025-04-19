let accordionBtns = document.querySelectorAll(".accordion");
let panel;
[...accordionBtns].forEach(btn => {

    btn.addEventListener("click", e => {

        btn.classList.toggle("active");
        panel = btn.nextElementSibling;
        panel.classList.toggle("d-none"); 

    });

});