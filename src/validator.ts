import { KMLObject } from './interfaces';

export const validateKML = (kmlObject: KMLObject): boolean => {
  if (!kmlObject || !kmlObject.kml || !kmlObject.kml.Document) {
    throw new Error('Invalid KML object');
  }

  if (
    !Array.isArray(kmlObject.kml.Document) ||
    kmlObject.kml.Document.length === 0
  ) {
    throw new Error('Invalid KML object: Document is missing or empty');
  }

  for (const document of kmlObject.kml.Document) {
    if (
      !document.Placemark ||
      !Array.isArray(document.Placemark) ||
      document.Placemark.length === 0
    ) {
      throw new Error('Invalid KML object: Placemark is missing or empty');
    }
  }

  return true;
};
