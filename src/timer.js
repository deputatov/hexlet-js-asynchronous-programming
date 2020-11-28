export default (totalTime, cb) => ({
  step: 100,
  elapsedTime: 0,
  tick() {
    const newElapsedTime = this.elapsedTime + this.step;
    if (newElapsedTime > totalTime) {
      clearInterval(this.intervalId);
      cb({ state: 'finished' });
      return;
    }
    this.elapsedTime = newElapsedTime;
    cb({ state: 'working', elapsedTime: this.elapsedTime });
  },
  start() {
    this.intervalId = setInterval(this.tick.bind(this), this.step);
  },
});
