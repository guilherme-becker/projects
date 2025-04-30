let btnUpdate = document.querySelectorAll(".btn-update");
let btnsDelete = document.querySelectorAll(".btn-delete");

function databaseFetch(btns, method = "POST") {

    [...btns].forEach(btn => {
   
        btn.addEventListener("click", event => {
    
            fetch(btn.dataset.route, {
                method: "POST"
            }).then(response => {
                response.json();
            }).then(json => {
                window.location.reload();
            });
    
        });
        
    });

}

databaseFetch(btnUpdate);
databaseFetch(btnsDelete, "DELETE");