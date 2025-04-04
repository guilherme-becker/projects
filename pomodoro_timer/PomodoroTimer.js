class PomodoroTimer {

    constructor(
        displayTime = "#display-time",
        btnStart = "#btn-start",
        btnStop = "#btn-stop",
        btnReset = "#btn-reset"
    ) {
        this.displayTimeEl = document.querySelector(displayTime);
        this.btnStartEl = document.querySelector(btnStart);
        this.btnStopEl = document.querySelector(btnStop);
        this.btnResetEl = document.querySelector(btnReset);
        this.initEvent();
        this.timeTotal = 25;
        this.timeSec = 0;
    }

    initEvent() {

        this.btnStartEl.addEventListener("click", e => {

            this.btnStartEl.disabled = true;

            this.runTimer();

        });

        this.btnStopEl.addEventListener("click", e => {

            clearInterval(this.intervalID);

            this.btnStartEl.disabled = false;

        });

        this.btnResetEl.addEventListener("click", e => {

            this.timeSec = "00";
            this.timeTotal = 25;
            this.display();
            this.btnStartEl.disabled = false;

        });

    }

    runTimer() {

        this.intervalID = setInterval(() => {

            if(Number(this.timeSec) === 0 && this.timeTotal === 0) {
                clearInterval(this.intervalID);
                this.timeSec = 0;
                this.timeTotal = 0;                
            } else if(Number(this.timeSec) === 0) {
                this.timeSec = 59;
                this.timeTotal--;
            }

            if(this.timeSec < 0) this.timeSec = 0;
            
            if(this.timeSec < 10) this.timeSec = `0${this.timeSec}`;
            
            this.display();
            
            this.timeSec--;

        }, 1000);

    }

    display() {
        this.displayTimeEl.innerHTML = `${this.timeTotal}:${this.timeSec}`;
    }

}