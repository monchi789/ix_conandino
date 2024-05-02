interface CountdownElements {
  days: HTMLElement;
  hours: HTMLElement;
  minutes: HTMLElement;
  seconds: HTMLElement;
}

class Countdown {
  private targetDate: Date;
  private countdownElements: CountdownElements;
  private countdownInterval: number | null;

  constructor(targetDate: Date, elements: CountdownElements) {
    this.targetDate = targetDate;
    this.countdownElements = elements;
    this.countdownInterval = null;
  }

  public start(): void {
    this.updateCountdown();

    this.countdownInterval = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  public stop(): void {
    if (this.countdownInterval !== null) {
      clearInterval(this.countdownInterval);
    }
  }

  private updateCountdown(): void {
    const currentTime = new Date().getTime();
    const timeDifference = this.targetDate.getTime() - currentTime;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    this.countdownElements.days.textContent = days.toString();
    this.countdownElements.hours.textContent = hours.toString().padStart(2, '0');
    this.countdownElements.minutes.textContent = minutes.toString().padStart(2, '0');
    this.countdownElements.seconds.textContent = seconds.toString().padStart(2, '0');

    if (timeDifference <= 0) {
      this.stop();
    }
  }
}

// Obtener elementos HTML por sus IDs
const daysElement = document.getElementById("dias");
const hoursElement = document.getElementById("horas");
const minutesElement = document.getElementById("minutos");
const secondsElement = document.getElementById("segundos");

// Crear un objeto Countdown con la fecha de destino y los elementos HTML
const countdownElements: CountdownElements = {
  days: daysElement!,
  hours: hoursElement!,
  minutes: minutesElement!,
  seconds: secondsElement!,
};

const targetDate = new Date("2024-06-08T08:00:00");

const countdown = new Countdown(targetDate, countdownElements);
countdown.start();
