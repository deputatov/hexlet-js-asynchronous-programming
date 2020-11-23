/* eslint-disable import/prefer-default-export */
import fs from 'fs';

export const compareFileSizes = (filepath1, filepath2, cb) => {
  fs.stat(filepath1, (err1, stats1) => {
    if (err1) {
      cb(err1);
      return;
    }
    fs.stat(filepath2, (err2, stats2) => {
      if (err2) {
        cb(err2);
        return;
      }
      cb(null, Math.sign(stats1.size - stats2.size));
    });
  });
};
