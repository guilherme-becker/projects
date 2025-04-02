class ColorFlipper {

    constructor(btnChange = "#change-color", displayColor = "#display-color") {
        this.btnChange = document.querySelector(btnChange);
        this.displayColor = document.querySelector(displayColor);
        this.bodyColor = document.querySelector("body");
        this.colors = ["red", "green", "purple", "orange", "yellow", "white", "black", "blue", "lightblue"];
        this.initEvent();
    }

    set btnChange(value) {
        this._btnChange = value;
    }

    get btnChange() {
        return this._btnChange;
    }

    set displayColor(value) {
        this._displayColor = value;
    }

    get displayColor() {
        return this._displayColor;
    }

    initEvent() {

        let randomColor;

        this.btnChange.addEventListener("click", e => {
            
            randomColor = Math.floor(Math.random() * this.colors.length);
            
            this.displayColor.innerHTML = `Color: ${this.colors[randomColor]}`;
            this.bodyColor.style.backgroundColor = this.colors[randomColor];

        });

    }

}