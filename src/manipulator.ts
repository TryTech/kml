export const addPlacemark = (kmlObject: any, name: string, coordinates: string): void => {
    const placemark = {
      Placemark: {
        name: name,
        Point: {
          coordinates: coordinates
        }
      }
    };
    kmlObject.kml.Document[0].Placemark.push(placemark);
};