import { KMLObject, Placemark } from './interfaces';

export const manipulator = (
  kmlObject: KMLObject,
  newPlacemark: Placemark
): KMLObject => {
  if (!kmlObject || !kmlObject.kml || !kmlObject.kml.Document) {
    throw new Error('Invalid KML object');
  }

  kmlObject.kml.Document[0].Placemark.push(newPlacemark);
  return kmlObject;
};
