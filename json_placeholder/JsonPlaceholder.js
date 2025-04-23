class JsonPlaceholder {

    constructor(path, id = 0, comments = false) {

        this.path = path;
        this.id = id;
        this.comments = comments;
        this.getData();
    }

    set comments(value) {
        this._comments = value;
    }

    get comments() {
        return this._comments;
    }

    set path(value) {
        this._path = value;
    }

    get path() {
        return this._path;
    }

    set id(value) {
        this._id = value;
    }

    get id() {
        return this._id;
    }

    getData() {

        let url = "https://jsonplaceholder.typicode.com";

        let fetchUrl = `${url}${this.path}` + (this.id > 0 ? `/${this.id}` : '');

        if(this.comments && this.id > 0) fetchUrl += "/comments";

        fetch(fetchUrl).then(response => response.json())
                       .then(json => this.display(json)); 

    }

    display(json) {

        let display = document.querySelector("#display");

        display.innerHTML += `<div>`;

        console.log(json);

        if(this.id > 0 && !this.comments) {

            for(let name in json) display.innerHTML += `<p>${name} => ${json[name]}</p>`;

            display.innerHTML += `---------------------------------<br>`;

        } else {

            json.forEach(item => {
    
                for(let name in item) display.innerHTML += `<p>${name} => ${item[name]}</p>`;
                
                display.innerHTML += `---------------------------------<br>`;
    
            });
        }


        display.innerHTML += `</div>`;

    }

}