class TipCalculator {

    constructor(
        btnCalculate = "#calculate",
        inputBill = "#bill",
        inputTip = "#tip",
        displayTotal = "#display-total"
    ) {
        this.btnCalculate = document.querySelector(btnCalculate);
        this.inputBill = document.querySelector(inputBill);
        this.inputTip = document.querySelector(inputTip);
        this.displayTotal = document.querySelector(displayTotal);
        this.initEvent();
    }

    set btnCalculate(value) {
        this._btnCalculate = value;
    }

    get btnCalculate() {
        return this._btnCalculate;
    }

    set inputBill(value) {
        this._inputBill = value;
    }

    get inputBill() {
        return this._inputBill;
    }

    set inputTip(value) {
        this._inputTip = value;
    }

    get inputTip() {
        return this._inputTip;
    }

    set displayTotal(value) {
        this._displayTotal = value;
    }

    get displayTotal() {
        return this._displayTotal;
    }

    initEvent() {

        let bill;
        let tip;

        this.btnCalculate.addEventListener("click", e => {

            bill = Number(this.inputBill.value);
            tip = Number(this.inputTip.value);

            this.displayTotal.innerHTML = `Total: R$ ${(bill + bill * tip / 100).toFixed(2)}`;
            

        });

    }

}