export const manipulator = (kmlObject: any, newPlacemark: any): any => {
  if (!kmlObject || !kmlObject.kml || !kmlObject.kml.Document) {
    throw new Error('Invalid KML object');
  }

  kmlObject.kml.Document[0].Placemark.push(newPlacemark);
  return kmlObject;
};