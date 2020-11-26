/* eslint-disable import/prefer-default-export */
import { promises as fs, promises } from 'fs';

export const exchange = async (filepath1, filepath2) => {
  const [data1, data2] = await Promise.all([
    fs.readFile(filepath1, 'utf-8'),
    fs.readFile(filepath2, 'utf-8'),
  ]);
  await Promise.all([
    fs.writeFile(filepath1, data2),
    fs.writeFile(filepath2, data1),
  ]);
};
