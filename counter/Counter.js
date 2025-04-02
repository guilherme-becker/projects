class Counter {

    constructor(displayNumber = "#display-number",
                btnIncrease = "#increase",
                btnReset = "#reset",
                btnDecrease = "#decrease"
            ) {
                this.displayNumber = document.querySelector(displayNumber);
                this.btnIncrease = document.querySelector(btnIncrease);
                this.btnReset = document.querySelector(btnReset);
                this.btnDecrease = document.querySelector(btnDecrease);
                this.counter = 0;
                this.initEvents();
            }

    set displayNumber(value) {
        this._displayNumber = value;
    }

    get displayNumber() {
        return this._displayNumber;
    }

    set btnIncrease(value) {
        this._btnIncrease = value;
    }

    get btnIncrease() {
        return this._btnIncrease;
    }

    set btnReset(value) {
        this._btnReset = value;
    }

    get btnReset() {
        return this._btnReset;
    }

    set btnDecrease(value) {
        this._btnDecrease = value;
    }

    get btnDecrease() {
        return this._btnDecrease;
    }

    updateDisplay(counter = 0) {
        this.displayNumber.innerHTML = counter;
    }

    initEvents() {

        this.updateDisplay();

        this.btnReset.addEventListener("click", e => {

            this.counter = 0;

            this.updateDisplay(this.counter);

        });

        this.btnIncrease.addEventListener("click", e => {

            this.counter++;

            this.updateDisplay(this.counter);

        });

        this.btnDecrease.addEventListener("click", e => {

            this.counter--;

            this.updateDisplay(this.counter);

        });

    }

}