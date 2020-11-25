/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

export const reverse = (filepath) =>
  fs
    .readFile(filepath, 'utf-8')
    .then((data) => data.split('\n').reverse().join('\n'))
    .then((result) => fs.writeFile(filepath, result));
