/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

export const getTypes = (filePaths) => {
  const initPromise = Promise.resolve([]);
  const promise = filePaths.reduce((acc, path) => {
    const newAcc = acc.then((contents) =>
      fs
        .stat(path)
        .then((stats) =>
          stats.isDirectory()
            ? contents.concat('directory')
            : contents.concat('file')
        )
        .catch(() => contents.concat(null))
    );
    return newAcc;
  }, initPromise);
  return promise;
};
