class AgeCalculator {

    constructor(
        btnCalculate = "#calculate",
        inputDate = "#date",
        displayAge = "#display"
    ) {
        this.btnCalculate= document.querySelector(btnCalculate);
        this.inputDate = document.querySelector(inputDate);
        this.displayAge = document.querySelector(displayAge);
        this.initEvent();
    }

    set btnCalculate(value) {
        this._btnCalculate = value;
    }

    get btnCalculate() {
        return this._btnCalculate;
    }

    set inputDate(value) {
        this._inputDate = value;
    }

    get inputDate() {
        return this._inputDate;
    }

    set displayAge(value) {
        this._displayAge = value;
    }

    get displayAge() {
        return this._displayAge;
    }

    initEvent() {

        let currentDate = new Date();

        let date;

        this.btnCalculate.addEventListener("click", e => {

            date = new Date(this.inputDate.value);            

            let years = currentDate.getFullYear() - date.getFullYear();
            let month = currentDate.getMonth() - date.getMonth();

            if(month < 0 || (month === 0 && currentDate.getDate() < date.getDate())) years--;
            
            this.displayAge.innerHTML = `You are ${years} years old`;

        });

    }

}