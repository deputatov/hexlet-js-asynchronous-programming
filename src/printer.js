import fs from 'fs';

// BEGIN (write your solution here) (write your solution here)
export default (filepath) =>
  fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  });
