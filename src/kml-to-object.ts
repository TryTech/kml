import { KMLObject } from './interfaces';
import { parseString } from 'xml2js';
import { reader } from './';

export const convertKmlFileToObject = async (
  kmlFile: string
): Promise<KMLObject> => {
  return new Promise((resolve, reject) => {
    reader(kmlFile)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const convertKmlTextToObject = async (
  kmlText: string
): Promise<KMLObject> => {
  return new Promise((resolve, reject) => {
    parseString(kmlText, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};
