import { writeFile } from 'fs';
import { Builder } from 'xml2js';
import { KMLObject } from './interfaces';

export const writer = (
  kmlObject: KMLObject,
  filePath: string
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const builder = new Builder();
    const xml = builder.buildObject(kmlObject);

    writeFile(filePath, xml, err => {
      if (err) reject(err);

      resolve();
    });
  });
};
