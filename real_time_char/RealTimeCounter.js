class RealTimeCounter {

    constructor(inputId = "#textarea", displayTotalId = "#total-counter", remainingCounterId = "#remaining-counter") {

        this.inputEl = document.querySelector(inputId);
        this.displayTotalEl = document.querySelector(displayTotalId);
        this.remainingCounterEl = document.querySelector(remainingCounterId);
        this.maxLength = Number(this.inputEl.getAttribute("maxLength"));

        this.initEvent();

    }

    initEvent() {

        this.updateCounter();

        this.inputEl.addEventListener("keyup", e => {

            this.updateCounter();

        });

    }

    updateCounter() {

        this.displayTotalEl.innerHTML = `Total: ${this.inputEl.value.length}`;

        this.remainingCounterEl.innerHTML = `Remaining: ${this.maxLength - this.inputEl.value.length}`;

    }

}