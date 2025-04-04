class RollDiceSimulator {

    constructor(dice = "#dice", btnRoll = "#btn-roll", history = "#dice-history") {
        this.diceEl = document.querySelector(dice);
        this.btnRollEl = document.querySelector(btnRoll);
        this.historyEl = document.querySelector(history);
        this.initEvent();
        this.diceHistory = [];
    }

    initEvent() {

        let randomNumber;
        let icon;

        this.btnRollEl.addEventListener("click", e => {

            randomNumber = Math.floor(Math.random() * 6) + 1;

            this.btnRollEl.disabled = true;

            this.diceEl.classList.add("roll-dice");

            this.diceHistory.push(randomNumber);

            icon = this.getIcon(randomNumber);

            setTimeout(() => {
                this.diceEl.innerHTML = `<i class="${icon}"></i>`;
                this.displayHistory();
                this.diceEl.classList.remove("roll-dice");
                this.btnRollEl.disabled = false;

            }, 2000);
            

        });

    }

    getIcon(number) {

        let icon = "fa-solid fa-dice-";

        switch(number) {

            case 1:
                return icon + "one";
            break;
            case 2:
                return icon + "two";
            break;
            case 3:
                return icon + "three";
            break;
            case 4:
                return icon + "four";
            break;
            case 5:
                return icon + "five";
            break;
            case 6:
                return icon + "six";
            break;

        }

    }

    displayHistory() {

        let currentIndex = this.diceHistory.length - 1;
        let icon = this.getIcon(this.diceHistory[currentIndex]);

        this.historyEl.innerHTML += `
                                    <div class="roll">
                                        <p class="roll-num">Roll Nº${currentIndex + 1}</p>
                                        <p class="roll-icon"><i class="${icon}"></i></p>
                                    </div>
                                `;


    }

}