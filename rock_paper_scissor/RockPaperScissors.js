class RockPaperScissors {

    constructor(
        iconsClass = ".icons",
        displayResultId = "#result"
    ) {
        this.iconsEl = document.querySelector(iconsClass);
        this.displayResultEl = document.querySelector(displayResultId);
        this.initEvent();
        this.userScore = 0;
        this.cpuScore = 0;
        this.cpuChoice;
        this.choices = ["rock", "paper", "scissor"];
    }

    initEvent() {

        let userChoice;
        let result;


        [...this.iconsEl.children].forEach(option => {

            option.addEventListener("click", e => {

                this.cpuChoice = this.choices[Math.floor(Math.random() * 3)];

                userChoice = option.dataset.opt;

                result = this.validate(userChoice, this.cpuChoice);                

                console.log(result);
                

                this.display(result);

            });

        });

    }

    validate(user, cpu) {

        if(user === cpu) return "it's a tie";

        if((user === "rock" && cpu === "paper") ||
           (user === "paper" && cpu === "scissor") ||
           (user === "scissor" && cpu === "rock")) {
            this.cpuScore++;
           } else {
            this.userScore++;
           }

    }

    display(string = "") {
        
        this.displayResultEl.innerHTML = string === '' && typeof string !== undefined ? `User score: ${this.userScore} --- Cpu Score: ${this.cpuScore}` : string;

    }

}