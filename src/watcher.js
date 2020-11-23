import fs from 'fs';

export default (filepath, delay, cb) => {
  let lastTimeCheck = Date.now();

  const check = (timerId) => {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        clearInterval(timerId);
        cb(err);
        return;
      }
      const { mtimeMs } = stats;
      if (mtimeMs > lastTimeCheck) {
        cb(null);
        lastTimeCheck = mtimeMs;
      }
    });
  };

  const timerId = setInterval(() => check(timerId), delay);
  return timerId;
};
