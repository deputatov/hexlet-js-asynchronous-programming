/* eslint-disable import/prefer-default-export */
import fs from 'fs';

export const move = (source, dest, cb) => {
  fs.readFile(source, 'utf-8', (err1, data) => {
    if (err1) {
      cb(err1);
      return;
    }
    fs.writeFile(dest, data, (err2) => {
      if (err2) {
        cb(err2);
        return;
      }
      fs.unlink(source, cb);
    });
  });
};
