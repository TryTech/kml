import { readFile } from 'fs';
import { parseString } from 'xml2js';
import { KMLObject } from './interfaces';

export const reader = (filePath: string): Promise<Error | KMLObject> => {
  return new Promise((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err) reject(err);

      parseString(data, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  });
};
