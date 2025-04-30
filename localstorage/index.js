let dataEL = document.querySelectorAll("input");
let btn = document.querySelector("#btn-submit");
let clear = document.querySelector("#clear");
let users = localStorage.users ? JSON.parse(localStorage.users) : [];

btn.addEventListener("click", e => {

    users.push({
        name: [...dataEL][0].value.trim(),
        email: [...dataEL][1].value.trim(),
        age: [...dataEL][2].value.trim()
    });

    localStorage.setItem("users", JSON.stringify(users));

    window.location.reload();

});

clear.addEventListener("click", e => {

    localStorage.removeItem("users");
    users = [];

});

console.log(users);