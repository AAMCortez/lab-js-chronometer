class Chronometer {
   constructor() {
      this.currentTime = 0;
      this.intervalId = null;
   }

   start(printTimeCallback) {
      setInterval(() => {
         this.currentTime = +1;
         printTimeCallback = +1;
      }, 1000);
   }

   getMinutes() {
      let minutes = 0;
      return (minutes = Math.floor(this.currentTime / 60));
   }

   getSeconds() {
      let seconds = 0;
      return (seconds = this.currentTime % 60);
   }

   computeTwoDigitNumber(value) {
      function turnToString() {
         let string = this.getMinutes.toString() + this.getSeconds.toString();
         return string;
      }

      value.slice();
   }

   stop() {
      clearInterval(this.intervalId);
   }

   reset() {
      this.currentTime = 0;
   }

   split() {
      return `${getMinutes}: ${getSeconds}`;
   }
}
